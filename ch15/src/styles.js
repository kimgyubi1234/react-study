import { css } from '@emotion/react'

export const card = css`
    box-sizing: border-box;
    border-radius: 4px;
    width: 340px;
    box-shadow: 0 0 5px #00000044;
    padding: 10px;
    `;

export const inputbox = css`
    margin-bottom: 10px;
    & > input {
        width: 100%;
        height: 40px;
        border: 1px solid #888;
        box-sizing: border-box;
        padding: 10px;
        outline: none;
        cousor: pointer;

        &:hover {
            box-shadow: 0 0 3px #000000
        }
        &:active {
        
        }
        &:focus {
        
        }
    }
`;



export const bottonbox =css`
& > button {
    box-sizing: border-box;
    border: none;
    width: 100;;
    background-color: biue;
    cursor: pointer;

    &:hover {
        background-color: #0076dd;
    }
    &:active {
        background-color: #005fb3;
    }
    &:disabled {
        background-color: #828383;
        cursor: cell
    }
}
`