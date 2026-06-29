const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
  content = content.replace(/hover:text-black dark:text-white/g, 'hover:text-black dark:hover:text-white');
  fs.writeFileSync(path.join(componentsDir, file), content, 'utf8');
}

