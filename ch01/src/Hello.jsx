import {useState} from "react";

function Hello() { // 렌더링 되면서 새로 호출된다 => 변수와 이것저것 새로된다함
    console.log("함수호출 다시 됨?");
    const text = "헬로"; // 일반상수
    // const [ 상태변수, 상태셋터함수 ] = useState("초기값");
    const [ 상태변수, 상태셋터함수 ] = useState("초기값");

    return (
        <div>
            <button onClick={() => {상태셋터함수(text);}}>클릭</button>
            <h1>{상태변수}</h1>
        </div>
    )
}

export function Hi() {
    const [상태, 상태바꾸는함수] = useState(0);

    const 클릭함수 = () => {
        상태바꾸는함수(상태 + 1);
    };
    const 클릭함수2 = () => {
        상태바꾸는함수(상태 - 1);
    };


    return (
        <div>
            <button onClick={클릭함수}>증가</button>
            <button onClick={클릭함수2}>감소</button>
            <h1>{상태}</h1>
        </div>
    )
}

export function Bye() {
    return (
        <h1>바이</h1>
    )
}

export default Hello;