import { useState } from "react";
import TextInPut from "../../components/TextInInput/TextInPut";
import * as s from "./styles";
import { agree } from "../Signup/styles";

function Signin() {
    
    // const [ inputValues, setInterval ] =useState ([
    // email: "test@gmail.com",
    // password: "asdfa",
    // ]);

    

    const requestSignin = (eamil, password) => {
        Jason.parse(localStorage.getItem("users"));
        const foundUser = users.find(user => user.email === email && user.password === password);
        if(!foundUser) {
            throw (
                status
            )
            }
        }
    

        const handelSigninOnClick = async () => {
            const response = await requestSignin(inputValues.emal, inputValues,password);
            localStorage.setItem("accessToken");
        }

        // localStorage,setIntem("loginUser", JAON.stingify(temUser));
        // const userJson = lovalSrotage.getItem("loginUser")
        // const user = JAON.parse(usdrJson)
        // console.log(user);

    return (
        <div>
            <Link to={"/auth/signup"}>회원가입</Link>
            <TextInPut title={"아이디"} name={"username"}/>
            <PasswordInput title={"비밀번호"} name={"password"}/>
            <button onClick={handleSigninOnClick}>로그인</button>
        </div>
    )
}

export default Signin;