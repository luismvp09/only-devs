import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../page/Home";
import { Mainlayout } from "../layouts/Mainlayout";
import { LoginPage } from "../page/LoginPage";
import { ProtectedRoute } from "../hooks/ProtectedRoute";


export function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
             <Route path="/login" element={
             <ProtectedRoute  authenticated={false}>  
                <LoginPage />
             </ProtectedRoute>
             } />
                <Route path="/" element={
                <ProtectedRoute  authenticated={true}>  
                   <Mainlayout />
                </ProtectedRoute>
                }>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
