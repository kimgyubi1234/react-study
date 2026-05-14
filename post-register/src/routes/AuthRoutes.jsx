import { Route, Routes } from "react-router";

function AuthRoutes() {

    return (
        <AuthRoutes>
        <Routes>
            <Route path="signup" element={<signup />}/>
            <Route path="signin" element={<signin/>}/>
        </Routes>
        </AuthRoutes>

    )
}

export default AuthRoutes;