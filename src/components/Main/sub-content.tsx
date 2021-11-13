import styled from 'styled-components';
import Link   from 'next/link';

const subContents = [
  { image: '/images/newYoutube.png', name: 'YouTubeリンク', copy: '当日の様子を短い動画で配信', link: '/youtube' },
  { image: '/images/afterTohofes.png', name: '桐朋祭の様子', copy: 'ありがとう', link: '/after-tohofes' },
  { image: '/images/newGreetings.png', name: '委員長挨拶', copy: '委員長たちの面白い挨拶を掲載', link: '/about#greeting' },
  { image: '/images/newSchedule.png', name: '開催日時', copy: '最高の３日間のスケジュール', link: '/schedule' },
  { image: '/images/newProgram.png', name: 'プログラム', copy: 'デジタルで見れるこだわりの一冊', link: '/program' },
];

subContents.forEach(v => v.image = process.env.basePath + v.image);

const _subContents = subContents.reduce((p, cur, i) => {
  if (i % 2) p[p.length - 1].push(cur);
  else p.push([cur] as any);
  return p;
}, [] as [(typeof subContents)[number], (typeof subContents)[number]][]);

const SubContent = styled(props => <div { ...props }>
  <h2>SUB CONTENTS</h2>
  <section>
    { _subContents
      .map((tup, i) =>
        <div key={ i }>
          {
            tup.map(({ image, name, copy, link }) => <div key={ name }>
              <Link href={ link } passHref><a>
                <img src={ image } alt={ name + 'のアイコン' }/>
                <h3>{ name }</h3>
                <p>{ copy }</p>
              </a></Link>
            </div>)
          }
        </div>,
      )
    }
  </section>
</div>)`
  padding-block: 2rem;
  text-align: center;
  background: #1a1a1a;
  color: white;

  > h2 {
    font-size: 1.5rem;
    line-height: 1;

    ::before, ::after {
      content: '－';
    }
  }

  > section {
    display: inline-block;
    margin-bottom: 3%;
    > div {
      display: flex;
      margin-inline: auto;
      text-align: left;
      width: min(100%, 26rem);

      > div {
        display: inline-block;
        padding: 1rem;
        box-sizing: border-box;
        width: 50%;
        text-align: center;
        vertical-align: text-top;

        transition: 0.3s;

        > a {
          display: block;

          > img {
            width: 100%;
            transition: 0.3s;
          }

          > h3 {
            font-size: 1rem;
            color: transparent;
            background: linear-gradient(to top, #bf9d6d, #bf9d6d);
            background: -webkit-linear-gradient(to top, #bf9d6d, #bf9d6d);
            -webkit-background-clip: text;
          }


          :hover {
            text-shadow: 0 0 15px rgba(250, 250, 214, 0.5),
            0 0 15px rgba(250, 250, 214, 0.5),
            0 0 15px rgba(250, 250, 214, 0.5),
            0 0 15px rgba(250, 250, 214, 0.5);

            > img {
              transform: scale(1.05);
            }
          }
        }

        :nth-child(2) {
          position: relative;

          a {
            width: calc(100% - 2rem);
            position: absolute;
            top: 50%;
          }
        }
      }

      :last-child {
        margin-bottom: 5rem;
      }
    }
  }
`;

export default SubContent;
