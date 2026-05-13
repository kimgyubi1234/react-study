import * as s from "./styles";

function TextInPut({title, name}) {

    return (
        <div>
            <label css={s.label}>
                <div>{title}</div>
                <input type="text" name={name} />
            </label>
        </div>
    )
}

export default TextInPut;