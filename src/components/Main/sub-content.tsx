import styled from 'styled-components';
import Link   from 'next/link';

const subContents = [
  { image: '/images/newGreetings.png', name: '委員長挨拶', copy: '委員長たちの面白い挨拶を掲載' },
  { image: '/images/newSchedule.png', name: '開催日時', copy: '最高の３日間のスケジュール' },
  { image: '/images/newProgram.png', name: 'プログラム', copy: 'デジタルで見れるこだわりの一冊' },
  { image: '/images/newCovid19.png', name: 'コロナ対策', copy: '感染症対策を徹底します' },
  { image: '/images/newBlog.png', name: 'ブログ', copy: '事前の準備やイベントなどを配信' },
];

subContents.forEach(v => v.image = process.env.basePath + v.image);

const SubContent = styled(props => <div { ...props }>
  <h2>SUB CONTENTS</h2>
  <section>
    <div>
      { subContents
        .filter((_, i) => !(i % 2))
        .map(({ name, image, copy }) =>
          <Link href="/" key={ name } passHref><a>
            <img src={ image }/>
            <h3>{ name }</h3>
            <p>{ copy }</p>
          </a></Link>)
      }
    </div>
    <div>
      { subContents
        .filter((_, i) => i % 2)
        .map(({ name, image, copy }) =>
          <Link href="/" key={ name } passHref><a>
            <img src={ image }/>
            <h3>{ name }</h3>
            <p>{ copy }</p>
          </a></Link>)
      }
    </div>
  </section>
</div>)`
  padding-block: 2rem;
  text-align: center;
  background: black;
  color: white;

  > h2 {
    font-size: 1.5rem;
    line-height: 1;

    ::before, ::after {
      content: '－';
    }
  }

  > section {
    padding-block: 3rem;
    text-align: center;

    > div {
      display: inline-block;
      width: min(14rem, 45%);
      vertical-align: middle;

      > a {
        display: block;
        padding: 1.5rem;
        transition: 0.3s;

        > img {
          width: 100%;
          transition: 0.3s;
        }

        > h3 {
          font-size: 1rem;
          color: transparent;
          background: linear-gradient(to top, #ffffdb, #a16422);
          background: -webkit-linear-gradient(to top, #ffffdb, #a16422);
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
    }
  }
`;

export default SubContent;
