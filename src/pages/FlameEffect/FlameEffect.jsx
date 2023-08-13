import "./FlameEffect.scss";
import { start } from "./modules/start";
import { useEffect } from "react";

export default function FlameEffect() {
    useEffect(() => {
        start();
    }, [])

    return (
        <div className="flame-container">
            <div className="flame-wrapper">
                <canvas id="canvas" />
            </div>
        </div>
    )
}