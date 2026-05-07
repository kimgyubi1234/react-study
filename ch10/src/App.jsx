import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [state1, setState1] = useState(10); // 구조적 분해
  const [state2, setState2] = useState(20);
  const [state3, setState3] = useState(0);
  const [clicked, setClicked] = useState(false); // clicked가 시작과 끝을 정해줌
  const [isFetching, setFetching] = useState(false);

  const handleOnClick = () => { // 버튼 클릭시 state1만 바뀜. 상태 바뀌니 다시 렌더링하게 됨
    setState1(state1 * 10);     //state1 == 100
    setFetching(true);
    setClicked(true);
  }
  
  useEffect(() => { // useEffect 사용으로 state1의 값은 10이 아니라 100이 됨
    if (clicked) {
      setState2(state1 + state2); //state2 == 120
    }
  }, [state1]);
  
  useEffect(() => { // 상태변화로 코드가 다시 되돌아가서 state1은 100으로 state2는 120으로 바뀜
    if (clicked) {
      setState3(state1 + state2); //state3 == 220
      setClicked(false);
      setFetching(false);
    }
  }, [state2]);

  return (
    <>
    <button onClick={handleOnClick}>실행</button>
{/* isFetching 실행시 ||의 뒷부분은 안 보임 */}
    { // 여기서 중괄호 치는 이유는 이것들이 값이라서
      isFetching && <h1>패치중...</h1> || <>
    <h1>{state1}</h1>
    <h1>{state2}</h1>
    <h1>{state3}</h1>
    </>
    }
    </>
  )
}

export default App

// useState를 쓰는 이유 => 상태변화에 따른 렌더링이 필요할때 사용
// 기존의 검정박스를 파랑박스로 바꾸고 싶을 때 새로 버튼을 누르고 렌더링이 해서 박스를 만들고 거기에 파랑 값을 넣음
// ㄴ 기존의 검정박스를 두고 새로 파랑박스를 만드는거라 검정박스는 그래도 있음 . 여기서 변경 버튼이 state

//useEffet >> 동기적 처리
// 그다음 렌더링이 될때 값이 바껴서 출력됨 >> 이걸 방지하기 위해 사용