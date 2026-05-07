import { useEffect } from 'react'
import { useState } from 'react'


function App() {
  const boxRef = useRef();
  const num = useRef(0); // 렌더링 되더라도 메모리 유지
  const [n, setN] = useState(0);
  
  // console.log(document.querySelector("#box")); >> box가 존재하기 전(retrun)에 입력해버려서 null이 나와서

  useEffect(() => {
    console.log(boxRef.current); //Ref안에 반드시 currnet가 있음. 즉 Ref는 useEffect안에 사용해야함
    console.log(boxRef.current.classList);

    boxRef.current.style.width = "100px";
    boxRef.current.style.height = "100px";
    boxRef.current.style.backgroundColor = "100px";

    console.log(boxRef.current.style);
    //console.log(document.querySelector("#box"));
  })

  const handleOnClick = () => {
    num.current += 10;
    setN(num.current);
    console.log(num.current);
  }

  return (
    <>
      <div id='box' className='test abc' ref={boxRef}>

      </div>
      <h1>
        {num.current}
      </h1>
      <button onClick={handleOnClick}>증가</button>
    </>
  )
}

export default App

//useRef Hook 은 DOM 을 선택하는 용도 외에도, 다른 용도가 한가지 더 있는데요, 
// 바로, 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것