import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    const [ name, setName] = [10, (n) => {}]; // 비구조활당(구조분해)

    // const numberState = useState(10); // 상수로 고정시킨다.
    // const number = numberState[0];
    // const setNumber = numberState[1];
    const [number, setNumber] = useState(10);

    const handleOnClick = () => {
        setNumber(number + 10); 
        // numberState[1]는 함수, setter역할, 상태변화를 위해 set이 있어야한다
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleOnClick}>증가</button>
        </div>
    )
}

export default App //export default를 기본값으로 내보내고
// 앱은 메인문, 시작점