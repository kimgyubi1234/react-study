import { css } from "@emotion/react";

export const label = css`
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: #444444;

    & > input {
        margin: 5px 0 10px;
        box-sizing: border-box;
        outline: none;
        border: 1px solid #dbdbdb;
        border-radius: 6px;
        padding: 10px 15px;
        font-size: 18px;
        color: #222222;

        &:focus {
            border-color: #18208f;
            box-shadow: 0 0 5px 5px #777ed8;
        }
    }
`;