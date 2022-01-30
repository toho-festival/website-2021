export type Route = {
  key: string
  path: string
  logo: string
}

export const routes: Route[] = [
  { logo: '/images/menu-top.jpg', key: 'top', path: '/' },
  { logo: '/images/menu-schedule.jpg', key: '開催日時', path: '/schedule' },
  { logo: '/images/menu-projects.jpg', key: '企画一覧', path: '/projects' },
  { logo: '/images/after-tohofes.jpg', key: '桐朋祭の様子', path: '/after-tohofes' },
  { logo: '/images/menu-guide.jpg', key: 'ご案内', path: '/info' },
  { logo: '/images/menu-map.jpg', key: 'マップ', path: '/map' },
  { logo: '/images/menu-aboutTohofes.jpg', key: '桐朋祭について', path: '/about' },
  { logo: '/images/menu-program.jpg', key: 'プログラム', path: '/program' },
  { logo: '/images/youtube.jpg', key: '動画', path: '/youtube' },
];

routes.forEach(r => r.logo = process.env.basePath + r.logo);