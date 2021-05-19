import { FC, useState, useRef, MouseEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';

type prop = {
    title: string[]
    content: JSX.Element[]
  }
  
  const Events:FC<prop> = ({title, content}) => {
    const randomStr = () => Math.random().toString(32).substring(2)
    const randomId:{current: string[]} = useRef([]);
    const renderCount:{current: number} = useRef(0)
  
    if (renderCount.current === 0) {
      for (let i = 0, len = title.length; i < len; i++) {
        randomId.current.push(`tab-${randomStr()}`)
      }
      renderCount.current++
    }
  
    const [tabState, setTabState] = useState(randomId.current[0])
  
    const handleClick = (e: MouseEvent<HTMLElement>) => {
      e.preventDefault()
      setTabState(`${e.currentTarget.getAttribute('aria-controls')}`)
    }
  
    const keyDownMove = (e: KeyboardEvent<HTMLAnchorElement> | any, target: Element | null | undefined) => {
      if (target) {
        target.querySelector('a')?.focus()
        setTabState(`${target.querySelector('a')?.getAttribute('aria-controls')}`)
      } else if (
        !target &&
        e.currentTarget.closest('.tablist') &&
        e.key === 'ArrowRight'
      ) {
        setTabState(e.currentTarget.closest('.tablist')?.querySelector(`:scope > li:first-child > a`).getAttribute('aria-controls'))
        e.currentTarget.closest('.tablist')?.querySelector(':scope > li:first-child > a')?.focus()
      } else if (
        !target &&
        e.currentTarget.closest('.tablist') &&
        e.key === 'ArrowLeft'
      ) {
        setTabState(e.currentTarget.closest('.tablist')?.querySelector(`:scope > li:last-child > a`).getAttribute('aria-controls'))
        e.currentTarget.closest('.tablist')?.querySelector(':scope > li:last-child > a')?.focus()
      }
    }
  
    const handleKey = (e: KeyboardEvent<HTMLAnchorElement>) => {
      if (e.key === 'ArrowRight') {
        keyDownMove(e, e.currentTarget.parentElement?.nextElementSibling)
      }
      if (e.key === 'ArrowLeft') {
        keyDownMove(e, e.currentTarget.parentElement?.previousElementSibling)
      }
    }
  
    return (
      <TabSC>
        <ul className="tablist" role="tablist">
          {title.map((title: string, index: number) => (
            <li role="presentation" key={randomId.current[index]}>
              <a
                href={`#${randomId.current[index]}`}
                tabIndex={tabState === randomId.current[index] ? 0 : -1}
                role="tab"
                aria-controls={randomId.current[index]}
                aria-selected={tabState === randomId.current[index]}
                onClick={(e) => handleClick(e)}
                onKeyDown={(e) => handleKey(e)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div>
          {content.map((content, index) => (
            <div
              id={randomId.current[index]}
              key={randomId.current[index]}
              hidden={tabState === randomId.current[index] ? false : true}
              role="tabpanel"
            >
              {content}
            </div>
          ))}
        </div>
      </TabSC>
    )
  };
  
  const TabSC:FC = styled.div`
  margin-bottom: 100px;
  > ul[role="tablist"] {
    display: flex;
    padding: 0;
    > li {
      margin-top: 0;
      margin-bottom: 0;
      list-style: none;
      background-color: #ddd;
      > a {
        display: block;
        padding: 10px 30px;
        text-decoration: none;
        color: #000;
        &[aria-selected="true"] {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
  div[role="tabpanel"] {
    padding: 20px 40px;
    border: 1px solid #ccc;
    p {
      margin-bottom: 20px;
      line-height: 1.6;
    }
    b {
      font-weight: normal;
      font-size: 22px;
    }
    button {
      margin-bottom: 20px;
      padding: 5px 20px;
      border: 2px solid #ccc;
      border-radius: 10px;
    }
  }
  `;
  

export default Events;