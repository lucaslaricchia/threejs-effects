import { AmbientLight, PointLight, Scene } from 'three';

export function createScene() {
    const scene = new Scene();
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    const pointLight = new PointLight(0xffffff, 1);
    pointLight.position.set(0, 10, 0);
    scene.add(pointLight);
    scene.add(ambientLight);
    window.scene = scene;
}