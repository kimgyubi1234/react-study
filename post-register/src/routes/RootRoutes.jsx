import { Route, Routes } from "react-router";
import AuthRoutes from "./AuthRoutes";

function RootRoutes() {

    return (
        <Routes>
            <Route path="/" element={<></>}>

            </Route>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="*" element={<>페이지를 찾을 수 없습니다.</>} />
        </Routes>
    )
}

export default RootRoutes;