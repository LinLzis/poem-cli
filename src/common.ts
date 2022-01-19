// @ts-ignore
import poem from 'poemhub';
import { CommonOptions } from './types';
import { getModenPoem, getRandomTemplate } from './utils';

export function getPoem(options: CommonOptions) {
  let content = '';
  const { type, birthday } = options;

  if (type) {
    if (type === 'Moden') {
      content = getModenPoem(birthday);
    } else {
      const temp = getRandomTemplate(birthday);
      content = poem({ template: temp });
    }
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
