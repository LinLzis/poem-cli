export interface PoemOptions {
  type?: number; // 诗歌类型：五言：5，七绝：7，现代：0
  birthday?: number; // 根据生日生成诗句，如：20210101
  tones?: string; // 平仄音规律：默认随机
}

export interface CommonOptions {
  type?: 'Ancient' | 'Moden';
  birthday?: number;
}
