export type Route = {
  key: string
  path: string
}

export const routes: Route[] = [
  { key: '開催日時', path: '/schedule' },
  { key: '開催中イベント', path: '/event' },
  { key: 'ご案内', path: '/info' },
  { key: 'マップ', path: '/maps' },
  { key: '桐朋祭について', path: '/about' },
  { key: 'プログラム', path: '/program' },
  { key: 'コロナ対策', path: '/covid19' },
  { key: '総務企画', path: '/field-game'},
];
