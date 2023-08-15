import { SelectiveBloomEffect, EffectComposer, EffectPass, BlendFunction, RenderPass, DepthPickingPass, } from "postprocessing";
import { WebGLRenderer } from "three";

export function createRenderer() {
    const renderer = new WebGLRenderer({
        canvas: document.getElementById("canvas"),
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    window.renderer = renderer;

    const renderPass = new RenderPass(scene, camera);

    const bloomEffect = new SelectiveBloomEffect(scene, camera, {
        blendFunction: BlendFunction.ADD,
        mipmapBlur: true,
        luminanceThreshold: 0,
        luminanceSmoothing: 0.2,
        intensity: 6,
    });

    const effectPass = new EffectPass(camera, bloomEffect);
    const composer = new EffectComposer(renderer);
    const depthPickingPass = new DepthPickingPass();
    composer.addPass(renderPass);
    composer.addPass(depthPickingPass);
    composer.addPass(effectPass);
    window.bloomEffect = bloomEffect;
    window.composer = composer;
}