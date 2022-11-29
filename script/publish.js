const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 获取主目录下的package.json的version，同步至packages/components下的package.json
const mainPackageJson = require('../package.json');
const componentsPackageJson = require('../packages/components/package.json');

componentsPackageJson.version = mainPackageJson.version;
fs.writeFileSync(path.resolve(__dirname, '../packages/components/package.json'), JSON.stringify(componentsPackageJson, null, 2));

// 进入packages/components目录，执行npm run build && npm publish
execSync('npm run build', { cwd: path.resolve(__dirname, '../packages/components'), stdio: 'inherit' });
console.log('\x1B[32m%s\x1B[0m', 'package component build success');

// 发布npm包
execSync('npm publish', { cwd: path.resolve(__dirname, '../packages/components'), stdio: 'inherit' });
console.log('\x1B[32m%s\x1B[0m', 'package component publish success');
