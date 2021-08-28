import styled from 'styled-components';
import Link   from 'next/link';

const projects = [
  { id  : 'ExperienceProject', icon: '/images/newExperience.png', name: '体験型企画', copy: '体験で刻み込む最高の思い出', link: '/projects' },
  { id: 'ExhibitProject', icon: '/images/newExhibit.png', name: '展示企画', copy: '個性の爆発', link: '/projects#exhibit' },
  { id: 'MusicProject', icon: '/images/newMusic.png', name: '音響企画', copy: '桐朋生の奏でる最高のMUSIC', link: '/projects#music' },
  { id: 'StageProject', icon: '/images/newStage.png', name: 'ステージ企画', copy: '最高のエンターテイメント', link: '/projects?tab=2' },
];

projects.forEach(v => v.icon = process.env.basePath + v.icon);

const Project = styled(props => <div { ...props }>
  <h2>PROJECTS</h2>
  <section>
    {
      projects.map(({ id, icon, name, copy, link }) => <Link href={ link } passHref key={ id }><a>
          <div>
            <img src={ icon } alt={ name + 'のアイコン' }/>
          </div>
          <div>
            <h3>{ name }</h3>
            <p>{ copy }</p>
          </div>
        </a></Link>,
      )
    }
  </section>
</div>)`
  padding-block: 2rem;
  text-align: center;
  color: white;
  background: #1a1a1a;

  > h2 {
    font-size: 1.5rem;
    line-height: 1;

    ::before, ::after {
      content: '－';
    }
  }

  > section {
    display: inline-block;

    > a {
      display: flex;
      margin: 3rem 1rem;

      > div:first-child {
        position: relative;
        width: 8rem;

        > img {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 8rem;
          transition: .3s;

          &:hover {
            transform: translateY(-50%) scale(1.05);
          }
        }
      }

      > div:last-child {
        padding-inline: 1rem 0;
        opacity: .8;

        > h3 {
          font-size: 1rem;
          color: transparent;
          background: linear-gradient(to top, #ffffdb, #a16422);
          background: -webkit-linear-gradient(to top, #ffffdb, #a16422);
          -webkit-background-clip: text;
        }

        > p {
          font-size: 1rem;
          padding-block-start: 1rem;
          padding-inline: 1.8rem 0;
        }
      }
    }

    > a:nth-child(2n) {
      flex-direction: row-reverse;

      > div:last-child {
        padding-inline: 0 1rem;
        text-align: right;

        > p {
          padding-inline: 0 1.8rem;
        }
      }
    }
  }
`;

export default Project;
