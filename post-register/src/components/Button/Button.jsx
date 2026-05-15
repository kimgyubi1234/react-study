import * as s from ".styles";
import { Children } from "react";
function Button({children, onClick, value}) {

    return (
           <button css={s.button} value={value} onClick={onClick}>
             {children}
           </button>
       )
}

export default Button;