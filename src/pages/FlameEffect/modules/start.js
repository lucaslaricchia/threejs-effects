import { init } from './init';
import { Clock } from 'three';

let options = {
    exposure: 2.8,
    bloomStrength: 3.5,
    bloomRadius: 0.39,
    color0: [0, 0, 0],
    color1: [81, 14, 5],
    color2: [181, 156, 24],
    color3: [255, 255, 255],
    color4: [200, 79, 0],
    color5: [64, 27, 0],
};

window.options = options;
window.uniforms = [];

export function start() {
    init();
    loop();
}

function loop(clock = new Clock()) {
    renderer.render(scene, camera);
    composer.render();
    requestAnimationFrame(() => loop(clock));
}