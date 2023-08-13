import { OrbitControls } from "three/addons/controls/OrbitControls.js";
export function createOrbitControl(){
    const controls = new OrbitControls(window.camera, window.renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();
    window.controls = controls;
}