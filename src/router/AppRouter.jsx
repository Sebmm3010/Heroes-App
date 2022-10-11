import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../auth';
import { HeroesRoutes } from '../heroes';
import { Navbar } from '../ui';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />

                <Route path="/*" element={<HeroesRoutes />} />
                
            </Routes>
        </>
    )
}
