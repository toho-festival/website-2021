export type Route = {
  key: string
  path: string
  logo: string
}

export const routes: Route[] = [
  { logo: '/images/menu-top.jpg', key: 'top', path: '/' },
  { logo: '/images/menu-schedule.jpg', key: '開催日時', path: '/schedule' },
  { logo: '/images/menu-projects.jpg', key: '企画一覧', path: '/projects' },
  { logo: '/images/menu-news.jpg', key: '最新情報', path: '/news' },
  // { logo: '/images/menu-holdingEvents.jpg', key: '開催中イベント', path: '/event' },
  { logo: '/images/menu-guide.jpg', key: 'ご案内', path: '/info' },
  { logo: '/images/menu-map.jpg', key: 'マップ', path: '/map' },
  { logo: '/images/menu-aboutTohofes.jpg', key: '桐朋祭について', path: '/about' },
  { logo: '/images/menu-program.jpg', key: 'プログラム', path: '/program' },
  // { logo: '/images/menu-covid19.jpg', key: 'コロナ対策', path: '/covid19' },
  // { logo: '/images/menu-newestInfo.jpg', key: '総務企画', path: '/field-game'},
  { logo: '/images/menu-schedule.jpg', key: 'ブログ', path: '/blog' },
];

routes.forEach(r => r.logo = process.env.basePath + r.logo);