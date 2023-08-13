import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import FlameEffect from "../pages/FlameEffect/FlameEffect";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/flame-effect",
        element: <FlameEffect />
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}