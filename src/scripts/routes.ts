export type Route = {
  key: string
  path: string
}

export const routes: Route[] = [
  { key: '最新情報', path: '/news' },
  { key: '開催中イベント', path: '/event' },
  { key: 'ご案内', path: '/info' },
  { key: 'マップ', path: '/maps' },
  { key: '桐朋祭について', path: '/about' },
  { key: 'パンフレット', path: '/pamphlet' },
  { key: 'コロナ対策', path: '/covid19' },
];
