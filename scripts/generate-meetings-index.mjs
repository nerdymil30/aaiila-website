import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '../public/data');
const outputFile = path.join(__dirname, '../public/meetings-index.json');

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

const meetings = files.map(file => {
  const content = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8'));
  return {
    id: content.metadata.post_id,
    title: content.metadata.title,
    slug: content.metadata.post_name,
    date: content.event?.date || content.metadata.post_date,
    status: content.event?.status || 'UNKNOWN',
    category: content.metadata.category,
    thumbnailId: content.custom_fields?.find(f => f.meta_key === '_thumbnail_id')?.meta_value,
    backgroundImage: content.custom_fields?.find(f => f.meta_key === 'stunnig_headers_bg_img')?.meta_value,
    topics: content.topics?.length || 0,
    filename: file
  };
});

// Sort by date (newest first)
meetings.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB - dateA;
});

fs.writeFileSync(outputFile, JSON.stringify(meetings, null, 2));
console.log(`Generated meetings index with ${meetings.length} meetings`);
