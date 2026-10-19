import fs from "fs";
import path from "path";
import sitemap from "../src/app/sitemap";

function generateXml() {
  const items = sitemap();
  const dateStr = new Date().toISOString().split("T")[0];

  const xmlEntries = items.map((item) => {
    const lastMod = item.lastModified
      ? (item.lastModified instanceof Date
          ? item.lastModified.toISOString().split("T")[0]
          : String(item.lastModified).split("T")[0])
      : dateStr;

    return `  <url>
    <loc>${item.url}</loc>
    <lastmod>${lastMod}</lastmod>
    ${item.changeFrequency ? `<changefreq>${item.changeFrequency}</changefreq>` : ""}
    ${item.priority !== undefined ? `<priority>${item.priority.toFixed(2)}</priority>` : ""}
  </url>`;
  });

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join("\n")}
</urlset>
`;

  const publicDir = path.resolve(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, xmlContent, "utf8");
  console.log(`Successfully generated public/sitemap.xml with ${items.length} URLs!`);
}

generateXml();
