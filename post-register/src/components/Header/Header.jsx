import * as s from ".styles";
import { LuPencil } from "react-icons/lu";
import { Link, replace, useLocation, useNavigate } from "react-router";
import { BiPulus } from "react-icons/bi";
import Button from "../Button/Button";

function Header() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [ show, setShow ] = useState(false);

    const handleWriteOnClick = () => {
        navigate("/write");
    }


    const handlePofileOnClick = () => {
        setShow(prev => !prev);
    }

    // 로그아웃기능 로그아웃은 토큰을 반환하는 것
    const handleLogoutOnClick = () => {
        localStorage.removeItem("accessToken");
        navigate("/auth/signin", {
            replace: true,
        });
    }

    return (
           <header css={s.layout}>
                <div css={s.left}>
                    <Link to={"/"}>
                        <h1><LuPencil /> PostLab</h1>
                    </Link>
                </div>
                <div css={s.right}>
                    {
                        !pathname.startsWith("/write") && 
                        <Button onClick={handleWriteOnClick}><BiPulus />글쓰기</Button>
                    }
                    <div css={s.profile} onClick={handlePofileOnClick}>
                        <span>김준일</span>
                        <ul css={s.profileMenu(show)}>
                            <li>프로필 설정</li>
                            <li onClick={handleLogoutOnClick}>로그아웃</li>
                        </ul>
                    </div>
                </div>
           </header>
       )
}

export default Header;