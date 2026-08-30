const fs = require('fs');
const path = require('path');

const dirsToCheck = ['app', 'components', 'lib', 'markdown', 'content'];
const filesToCheck = ['llms.txt', 'README.md', 'vercel.json', 'next.config.js'];

let allFiles = [];

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else {
            allFiles.append(fullPath);
        }
    }
}

// Fix array append in js
allFiles = [];
function walkDirFix(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDirFix(fullPath);
        } else {
            allFiles.push(fullPath);
        }
    }
}

dirsToCheck.forEach(walkDirFix);
filesToCheck.forEach(f => {
    if (fs.existsSync(f)) {
        allFiles.push(f);
    }
});

function replaceLegacy(content) {
    let c = content;
    // Specifics
    c = c.replace(/goldenlegacy\.ae/g, 'junobizhub.com');
    c = c.replace(/golden-legacy/g, 'juno-bizhub');
    c = c.replace(/goldenlegacy/g, 'junobizhub');
    c = c.replace(/Golden Legacy/g, 'Juno BizHub');
    c = c.replace(/Our Legacy Standard/g, 'Our Premium Standard');
    c = c.replace(/Legacy Protection/g, 'Asset Protection');
    c = c.replace(/legacy building/g, 'wealth building');
    c = c.replace(/Legacy Estimator/g, 'Cost Estimator');
    c = c.replace(/Sharia-compliant legacy/g, 'Sharia-compliant estate');
    c = c.replace(/DisableLegacyServiceWorker/g, 'DisableServiceWorker');
    
    // Generic catch-all
    c = c.replace(/\blegacy\b/gi, 'bizhub');
    
    return c;
}

for (const p of allFiles) {
    try {
        const content = fs.readFileSync(p, 'utf8');
        const newContent = replaceLegacy(content);
        if (content !== newContent) {
            fs.writeFileSync(p, newContent, 'utf8');
            console.log('Updated ' + p);
        }
    } catch (e) {
        // skip binaries or unreadable files
    }
}
