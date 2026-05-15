import * as s from "./styles";

function TextInPut({title, name, value, onChange}) {

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