import { Route, Routes, useNavigate } from "react-router";
import AuthRoutes from "./AuthRoutes";
import { AiTwotoneUnlock } from "react-icons/ai";
import { useEffect } from "react";

function RootRoutes() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const authenticationQuery = useAuthentication(localStorage.getItem("accessToken"));

    useEffect(() => {
        if (!authenticationQuery.isLoading) {
            const status = authenticationQuery.data.status;
            if (status !== 200 && !pathname.statWith("/auth/")) {
                navigate("/auth/signin", {
                    replace: true,
                });
            }
            if (status === 200 && pathname.startWith("/auth")) {
                navigate("/", {
                    replace: true,
                });
            }
        }
    }, [authenticationQuery.isLoading]);


    // const queryClient = useQueryClient();

    // console.log(queryClient.getQuerycache());
    // console.log(authenticationQuery.isLoading);
    // console.log(authenticationQuery.data);

    return (
        <>
            {
                authenticationQuery.isLoading
                ? <h1>로딩중</h1>
                :
                <Routes>
                    <Route path="/" element={<></>}>

                    </Route>
                    <Route path="/auth/*" element={<AuthRoutes />} />
                    <Route path="*" element={<>페이지를 찾을 수 없습니다.</>} />
                </Routes>
            }
        </>
    )
}

export default RootRoutes;