import fs from 'fs';
import path from 'path';
/**
 * WildPath Post Generator Utility
 * This script demonstrates how new posts can be structured for the JSON engine.
 */
const title = process.argv[2] || "New Adventure";
const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
const date = new Date().toISOString().split('T')[0];
const template = `
  {
    title: "${title}",
    slug: "${slug}",
    pubDate: "${date}",
    category: "Hiking",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    excerpt: "Add a compelling summary here...",
    content: "# ${title}\\n\\nStart writing your adventure here..."
  },
`;
console.log("-----------------------------------------");
console.log("WILD PATH - NEW POST TEMPLATE GENERATED");
console.log("-----------------------------------------");
console.log(template);
console.log("-----------------------------------------");
console.log("Copy and paste the above into src/content/posts.ts");