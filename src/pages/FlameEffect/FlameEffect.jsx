import { useNavigate } from "react-router-dom";
import "./FlameEffect.scss";
import { start } from "./modules/start";
import { useEffect } from "react";

export default function FlameEffect() {
    const navigate = useNavigate();
    useEffect(() => {
        start();
    }, [])

    return (
        <div className="flame-container">
            <div className="flame-wrapper">
                <button className="go-back-button" onClick={() => navigate("/")}>Go Back</button>
                <canvas id="canvas" />
            </div>
        </div>
    )
}