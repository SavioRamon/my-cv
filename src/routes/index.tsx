import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import { Home } from "../components/screens/Home"


export const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}