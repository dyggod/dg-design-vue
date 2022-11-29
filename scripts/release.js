const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const mainPackage = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'));
const componentsPackageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../packages/components/package.json'), 'utf8'),
);
const nowVersion = mainPackage.version;

const VersionType = ['patch', 'minor', 'major'];

/**
 * 根据alias是patch、minor、major，计算下一个版本号
 * @param {alias} type
 */
function generateVersion(alias) {
  if (!VersionType.includes(alias)) {
    throw new Error(`请传入正确的版本号类型，当前传入的是${alias}，可选的版本号类型为${VersionType.join('、')}`);
  }
  const versionArr = nowVersion.split('.');
  const [major, minor, patch] = versionArr;
  switch (alias) {
    case 'patch':
      versionArr[2] = parseInt(patch, 10) + 1;
      break;
    case 'minor':
      versionArr[1] = parseInt(minor, 10) + 1;
      versionArr[2] = 0;
      break;
    case 'major':
      versionArr[0] = parseInt(major, 10) + 1;
      versionArr[1] = 0;
      versionArr[2] = 0;
      break;
    default:
      break;
  }
  return versionArr.join('.');
}

// 接受npm run 命令的参数, 计算下一个版本号的函数
const args = process.argv.slice(2);
const [type] = args;
const nextVersion = generateVersion(type);

// 同步至packages/components下的package.json
componentsPackageJson.version = nextVersion;
fs.writeFileSync(path.resolve(__dirname, '../packages/components/package.json'), JSON.stringify(componentsPackageJson, null, 2));
execSync(`git add . && git commit -m "同步 ${nextVersion}"`);

console.log('\x1b[33m%s\x1b[0m', '开始构建组件库...');
execSync('npm run build', { cwd: path.resolve(__dirname, '../packages/components'), stdio: 'inherit' });
console.log('\x1B[32m%s\x1B[0m', '组件库构建完成');

// 发布npm包
console.log('\x1b[33m%s\x1b[0m', '开始发布组件库...');
// execSync(
//   'npm publish',
//   { cwd: path.resolve(__dirname, '../packages/components'), stdio: 'inherit' },
// );
console.log('\x1B[32m%s\x1B[0m', '组件库发布完成');

console.log('\x1b[33m%s\x1b[0m', '开始升级版本号并更新changelog...');
execSync(
  `standard-version --release-as ${type}`,
  { cwd: path.resolve(__dirname, '../'), stdio: 'inherit' },
);
console.log('\x1B[32m%s\x1B[0m', '版本升级完成');

console.log('\x1b[33m%s\x1b[0m', '开始push代码...');
// execSync('git push --follow-tags', { cwd: path.resolve(__dirname, '../'), stdio: 'inherit' });
console.log('\x1B[32m%s\x1B[0m', '代码push完成');
