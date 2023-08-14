import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import FlameEffect from "../pages/FlameEffect/FlameEffect";

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/meteor-effect" element={<FlameEffect />} />
            </Routes>
        </HashRouter>
    )
}