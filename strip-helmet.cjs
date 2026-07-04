const fs = require('fs');
const path = require('path');
const pagesDir = path.join(process.cwd(), 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('<Helmet>')) {
    // Remove the import { Helmet } from 'react-helmet-async'
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\n?/g, '');
    
    // Remove the <Helmet> ... </Helmet> block
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log('Stripped Helmet from ' + file);
    modifiedCount++;
  }
}
console.log('Modified ' + modifiedCount + ' files.');
