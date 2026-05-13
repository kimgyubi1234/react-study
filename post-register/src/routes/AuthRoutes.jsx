import { Route, Routes } from "react-router";

function AuthRoutes() {

    return (
        <AuthRoutes>
        <Routes>
            <Route path="signup" element={<Signup />}/>
            <Route path="signin" element={<>로그인</>}/>
        </Routes>
        </AuthRoutes>

    )
}

export default AuthRoutes;