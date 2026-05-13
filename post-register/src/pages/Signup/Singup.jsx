import TextInPut from "../../components/TextInInput/TextInPut";
import * as s from "./styles";

function Singup() {

    return (
        <div css={s.layout}>
            <div>
                <h2>계정 만들기</h2>
                <p>이미 계정이 있으신가요? <Link to ={"/auth/signin"}>로그인</Link></p>
            </div>
            <div>
                <div>
                    <TextInPut title={"이름"} name={"fullName"}/>
                </div>
                <div>
                    <TextInPut title={"이메일"} name={"fullName"}/>
                </div>
                <div>
                    <PasswordInPut title={"비밀번호"} name={"fullName"}/>
                </div>
                <div>
                    <PasswordInPut title={"비밀번호 확인"} name={"fullName"}/>
                </div>
                <div css={s.agree}>
                    <label>
                        <input type="checkbox" />
                        이용약관 및 개인정보처리방침에 동의합니다.
                    </label>
                </div>
                <div>
                    <button css={s.singypButton}><BIUserPlus />회원가입</button>
                </div>
            </div>
        </div>
    )
}

export default Singup;