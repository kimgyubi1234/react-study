import * as s from "./styles";

function Layout(childern) {

    return (
        <>
            <div css={s.layout}>
                <div css={s.container}>
                    {childern}
                </div>
            </div>
        </>
    )
}

export default Layout;