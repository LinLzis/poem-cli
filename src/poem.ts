import { program } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { PoemOptions } from './types';
import { getModenPoem, getRandomTemplate, getTemplate } from './utils';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import poem from 'poemhub';

const msgMapping: any = {
  '7': 'Seven-syllable poem',
  '5': 'Five-lines poem',
  '0': 'Modern poem',
};

export async function writePoem(options: PoemOptions) {
  let content = '';
  const spinner = ora();
  const { type, birthday } = options;

  if (type) {
    spinner.start(`Auto create poem of ${msgMapping[`${type}`]}`);
    if (type == 0) {
      content = getModenPoem(birthday);
    } else {
      const temp = getTemplate(type.toString(), birthday);
      content = poem({ template: temp });
    }
  } else if (birthday) {
    spinner.start('Auto create poem by birthday');
    // content = poem({ birthday });
    const temp = getRandomTemplate(birthday);
    content = poem({ template: temp });
  } else {
    spinner.start('Auto create poem by random');
    const randomType = Math.round(Math.random());
    if (randomType > 0) {
      content = poem();
    } else {
      content = getModenPoem();
    }
  }

  if (content) {
    spinner.succeed('Write poem success!');
    console.log(chalk.blue(content));
  } else {
    spinner.fail('Failed to write poem. = =!');
  }

  return content;
}

const poemCommand = (): void => {
  program
    .description("I'm just an emotionless poetry writing robot")
    .option('-t, --type [type]', '诗歌类型：五言：5，七绝：7，现代：0')
    .option('-b, --birthday [birthday]', '根据生日生成诗句，如：20210101')
    .action((options) => {
      writePoem({ ...options });
    });
};

export { poemCommand };
