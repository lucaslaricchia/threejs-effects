import { PerspectiveCamera } from "three";

export function createCamera() {
    const camera = new PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.set(19.855729119467718, 20, 19.687406233597498);

    window.camera = camera;
}