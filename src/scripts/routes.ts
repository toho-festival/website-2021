export type Route = {
  key: string
  path: string
}

export const routes: Route[] = [
  { key: '最新情報', path: '/news' },
  { key: '開催中イベント', path: '/projects' },
  { key: 'ご案内', path: '/info' },
  { key: 'マップ', path: '/maps' },
  { key: '桐朋祭について', path: '/about' },
  { key: 'プログラム', path: '/program' },
  { key: 'コロナ対策', path: '/covid19' },
  { key: '総務企画', path: '/field-game'},
];
