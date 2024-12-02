import chalk from 'chalk';
import { mReadFile } from '../utils/fsSys.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import clipboard from 'clipboardy';
const __dirname = dirname(fileURLToPath(import.meta.url));
const baseCss = (cmd) => {
    cmd
        .command('baseCss')
        .description('生成baseCss样式')
        .action(async () => {
        const cssText = await mReadFile(path.join(__dirname, '../../assets/base.css'));
        console.log(chalk.cyan(cssText));
        clipboard.write(cssText);
    });
};
export { baseCss };
