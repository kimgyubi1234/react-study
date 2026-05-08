import { useState } from 'react'
import { Link, Routes, useNavigate } from 'react-router-dom'


function Home() {
  const [name, setName] = useState("");
  return <>
  <h1>{name}소개 화면입니다.</h1>
  <input type="test" value={name} onChange={(e) => setName(e.target.value)} />
  </>
}
function About() {
  useEffect(() => {
    console.log("마운트");
    return () => {
      console.log("언마운트");
    }
  }, []);

  return <h1>소개 화면입니다.</h1>
}
function Product() {
  const [productName, setProductName] = useState("");
  const [productName, setProductName2] = useState("");

  useEffect(() => { //무조건 렌더링 될때 한번은 실행됨. 유즈이펙트가 실행됐다는건 나중에 마운트때 호출하겠다고 예약해두겠다. 언제? 싱품소게 쪽의 리턴이 실행될때
    console.log("마운트");
    return () => {
      console.log("언마운트");
    }
  }, [setProductName, setProductName2]); // 뒤에 있는 대괄호가 비어상태 = 아무것도 의존하지 않는다. 저 대괄호는 디펜던시라고 하며 종속성 의존성이라 불림. 한번만 실행하라는 의미
          // 대괄호가 없으면 모든 상태에 의존한다는 뜻으로 매번 마운트 됨. 매번 실행하라
          // 이 컴파운트의 상태가 렌더링이 되어졌을때 변화된 상태가 setProductName가 되면 변하겠다라는 의미. 랜더링 됐을때 특정값이(트리거?) 될때 실행하라
  return <>
    <h1>상품 소개 화면입니다.</h1>
    <input type="test" value={productName} onChange={(e) => setProductName(e.target.value)} />
    <input type="test" value={productName} onChange={(e) => setProductName2(e.target.value)} />
  </>
}

function App() {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);

  const handleClick = (e) => {
    navigate(e.tatget.value);
  }

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>증가</button>
      <nav>
        {/* 주소를 바꿔줌 , 상태를 유지하고 싶다, useEffect의 마운트 언마운트*/}
        <button value={"/p1"} onClick={handleOnClick}>1페이지</button> 
        <button value={"/p2"} onClick={handleOnClick}>2페이지</button>
        <button value={"/p3"} onClick={handleONClick}>3페이지</button>
        {/* 주소와 함께 엔터를 쳐줌 , 상태를 날리며 새로고침*/}
        <a href="/p1">1페이지</a>
        <a href="/p2">2페이지</a>
        <a href="/p3">3페이지</a>
        <Link to={"/p1"}>1페이지</Link>
        <Link to={"/p2"}>2페이지</Link>
        <Link to={"/p3"}>3페이지</Link>
      </nav>
    <Routes>
        <Routes pass='/p1' element={<Home />} />
        <Routes pass='/p2' element={<About />} />
        <Routes pass='/p3' element={<Product />} />
    </Routes>
    </>
  )
}

export default App
