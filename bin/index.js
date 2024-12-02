#!/usr/bin/env node
import { Command } from 'commander';
import { help } from './module/help.js';
import { baseCss } from './module/baseCss.js';
const cmd = new Command();
cmd.useCmd = function (cmd) {
    cmd && cmd(this);
};
cmd.version('1.0.0');
/* 命令行模块 */
cmd.useCmd(help);
cmd.useCmd(baseCss);
cmd.parse();
