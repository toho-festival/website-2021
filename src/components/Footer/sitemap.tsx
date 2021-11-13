import type { FC }     from 'react';
import styled from 'styled-components';
import Link   from 'next/link';

const projects = [
    { id  : 'Projects', icon: '/images/newExperience.png', name: 'ステージ企画', link: '/projects?tab=2'},
    { id  : 'Projects', icon: '/images/newExperience.png', name: '一般参加団体', link: '/projects'},
    { id  : 'ExperienceProject', icon: '/images/newExperience.png', name: '　>体験型企画', link: '/projects' },
    { id: 'ExhibitProject', icon: '/images/newExhibit.png', name: '　>展示企画', link: '/projects#exhibit' },
    { id: 'MusicProject', icon: '/images/newMusic.png', name: '　>音響企画', link: '/projects#music' },
  ];

const information = [
  { id  : 'info', icon: '/images/menu-guide.jpg', name: 'ご案内', link: '/info'},
  { id  : 'about', icon: '/images/menu-aboutTohofes.jpg', name: '桐朋祭について', link: '/about' },
  { id: 'newestInfo', icon: '/images/menu-news.jpg', name: '最新情報', link: '/news' },
  { id: 'map', icon: '/images/menu-map.jpg', name: 'マップ', link: '/map' },
  { id: 'program', icon: '/images/menu-program.jpg', name: 'プログラム', link: '/program' },
  { id: 'youtube', icon: '/images/youtube.png', name: '動画', link: '/youtube' },
  { id: 'schedule', icon: '/images/menu-schedule.jpg', name: '開催日時', link: '/schedule' },
];

const Sitemap:FC = () =>
  <Layout>
    <article>
      <Title>企画</Title>
      {
        projects.map(
          ({id, link, icon, name}) => <Link href={ link } passHref key={ id }><Anchor>
            <Flex>
              <Img src={ process.env.basePath + icon } alt={ name + 'のアイコン' } hidden/>
              <Name>{name}</Name>
            </Flex>
          </Anchor></Link>,
        )
      }
    </article>
    <aside>
      <Title>補足情報</Title>
      {
        information.map(
          ({id, link, icon, name}) => <Link href={ link } passHref key={ id }><Anchor>
            <Flex>
              <Img src={ process.env.basePath + icon } alt={ name + 'のアイコン' } hidden/>
              <Name>{name}</Name>
            </Flex>
          </Anchor></Link>,
        )
      }
    </aside>
  </Layout>;

const Layout = styled.div`
  margin: 0 15%;
  display: flex;
  justify-content: space-around;
`;


const Title = styled.h4`
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-decoration-skip-ink: none;
  text-underline-offset: 4px;
  padding: 10px;
  font-size: 1rem;

`;

const Anchor = styled.a`
  :hover{
    color: #0bd;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Img = styled.img`
  height: 20px;
  width: auto;
  border-radius: 100px;
  top:-50%;
  transform: translateY(50%);
`;

const Name = styled.p`
  font-size: 0.8rem;
`;

export default Sitemap;