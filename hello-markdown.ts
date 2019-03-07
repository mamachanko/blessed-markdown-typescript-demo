import * as blessed from 'blessed';
import * as contrib from 'blessed-contrib';
import chalk from 'chalk';

const screen = blessed.screen();
const markdown = contrib.markdown();

screen.append(markdown);
markdown.setOptions({ firstHeading: chalk.red.italic });
markdown.setMarkdown('# Hello \n This is **markdown** printed in the `terminal` 11');
screen.render();