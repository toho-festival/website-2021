export type Route = {
  key: string
  path: string
  logo: string
}

export const routes: Route[] = [
  { logo: '/images/menu-newestInfo.jpg', key: '最新情報', path: '/news' },
  { logo: '/images/menu-holdingEvents.jpg', key: '開催中イベント', path: '/event' },
  { logo: '/images/menu-guide.jpg', key: 'ご案内', path: '/info' },
  { logo: '/images/menu-map.jpg', key: 'マップ', path: '/maps' },
  { logo: '/images/menu-aboutTohofes.jpg', key: '桐朋祭について', path: '/about' },
  { logo: '/images/menu-program.jpg', key: 'プログラム', path: '/program' },
  { logo: '/images/menu-covid19.jpg', key: 'コロナ対策', path: '/covid19' },
  { logo: '/images/menu-newestInfo.jpg', key: '総務企画', path: '/field-game'},
];
