import { IoEyeOutline } from "react-icons/io5";
import * as s from "./styles";

function PasswordInPut({title, name}) {
    const [type, setType] = useState("password");
    const handlejHiddenOnClick = () => {
        setType(type === "password" ? "text" : "password");
    }

    return (
        <div>
            <label css={s.label}>
                <div>{title}</div>
                <input type={type} name={name} />
                <div css={s.hidden} onClick={handlejHiddenOnClick}>
                    {
                        type === "password"
                        ? <IoEyeOutline />
                        : <IoEyeOutlineline />
                    }
                </div>
            </label>
        </div>
    )
}

export default PasswordInPut;