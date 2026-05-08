import { css } from '@emotion/react'
import { useState } from 'react'
import  * as s  from './styles';

function App() {
  const [show, setShow] = useState(false);
  const b = `black`;

  const box = css`
    height: 100px;
    background-color: ${b};
  `;

  const box2 = (isShow) => {
    return css`
      width: 100px;
      height: 100px;
      background-color: blue;
      opacity: ${isShow ? '1' : '0'};
    `;
  }

  const box3 = (isShow) => css`
      width: 100px;
      height: 100px;
      background-color: blue;
      opacity: ${isShow ? '1' : '0'};
    `;


  return (
    <>
      <div css={box}></div>
      <button onClick={() => setShow(!show)}>{show ? '숨기기' : '보여기'}</button>
      <div>{box2(show)}</div>
      <div>{box3(show)}</div>
      <div>{s.box4}</div>
      <div>{s.box5}</div>
    </>
  )
}

export default App
