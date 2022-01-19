import { PoemOptions } from './types';
// @ts-ignore
import poem from 'poemhub';
import { getModenPoem, getRandomTemplate, getTemplate } from './utils';

export function getPoem(options: PoemOptions) {
  let content = '';
  const { type, birthday } = options;

  if (type) {
    if (type == 0) {
      content = getModenPoem(birthday);
    } else {
      const temp = getTemplate(type.toString(), birthday);
      content = poem({ template: temp });
    }
  } else if (birthday) {
    const temp = getRandomTemplate(birthday);
    content = poem({ template: temp });
  } else {
    const randomType = Math.round(Math.random());
    if (randomType > 0) {
      content = poem();
    } else {
      content = getModenPoem();
    }
  }

  return content;
}
