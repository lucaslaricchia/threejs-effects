import * as THREE from 'three';
import { vertcylinder } from '../shaders/vertCylinder';
import { fragcylinder } from '../shaders/fragCylinder';
import { fragflame } from '../shaders/fragFlame';
import { vertflame } from '../shaders/vertFlame';
import { fragment } from "../shaders/fragment";
import { vertex } from "../shaders/vertex";
import perlinNoise from "../assets/water-min.jpg";
import noise from "../assets/noise9.jpg";
import sparkleNoise from "../assets/sparkleNoise.jpg";
import { addToUpdateList } from '../../../utils/addToUpdateList';

export function createFlame() {
    const group = new THREE.Group();
    function createSmokeAround() {
        const uniforms = {
            perlinnoise: {
                type: "t",
                value: new THREE.TextureLoader().load(
                    perlinNoise
                )
            },
            color4: {
                value: new THREE.Vector3(...options.color3)
            },
            time: {
                type: "f",
                value: 0.0,
            },
            noise: {
                type: "t",
                value: new THREE.TextureLoader().load(
                    noise
                )
            }
        }
        const geometry = new THREE.CylinderGeometry(1.11, 0, 5.3, 50, 50, true);
        const material = new THREE.ShaderMaterial({
            uniforms,
            // wireframe:true,
            vertexShader: vertcylinder,
            fragmentShader: fragcylinder,
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(0, 0, -Math.PI / 2);
        mesh.position.set(-4, 0, 0);
        mesh.scale.set(1.5, 1.7, 1.5);

        group.add(mesh);
        addToUpdateList(uniforms)
    }

    function createConeOfFlames() {
        const uniforms = {
            perlinnoise: {
                type: "t",
                value: new THREE.TextureLoader().load(
                    perlinNoise
                )
            },
            color4: {
                value: new THREE.Vector3(...options.color4)
            },
            time: {
                type: "f",
                value: 0.0,
            },
            noise: {
                type: "t",
                value: new THREE.TextureLoader().load(
                    noise
                )
            },
        }
        const geometry = new THREE.CylinderGeometry(1, 0, 5.3, 50, 50, true);
        const material = new THREE.ShaderMaterial({
            uniforms,
            // wireframe:true,
            vertexShader: vertflame,
            fragmentShader: fragflame,
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(0, 0, -Math.PI / 2);
        mesh.position.set(-4.85, 0, 0);
        mesh.scale.set(2, 2, 2);
        group.add(mesh);
        addToUpdateList(uniforms)
    }

    function fireBall() {
        const uniforms = {
            time: {
                type: "f",
                value: 0.0
            },
            perlinnoise: {
                type: "t",
                value: new THREE.TextureLoader().load(noise)
            },
            sparknoise: {
                type: "t",
                value: new THREE.TextureLoader().load(sparkleNoise)
            },
            color5: {
                value: new THREE.Vector3(...options.color5)
            },
            color4: {
                value: new THREE.Vector3(...options.color4)
            },
            color3: {
                value: new THREE.Vector3(...options.color3)
            },
            color2: {
                value: new THREE.Vector3(...options.color2)
            },
            color1: {
                value: new THREE.Vector3(...options.color1)
            },
            color0: {
                value: new THREE.Vector3(...options.color0)
            },
            resolution: { value: new THREE.Vector2(window.width, window.height) },
        };
        const geometry = new THREE.SphereGeometry(1, 30, 30);
        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(0.78, 0.78, 0.78);
        mesh.position.set(0, 0, 0);
        group.add(mesh);
        addToUpdateList(uniforms)
    }

    function createTargetFlame() {
        const uniforms = {
            perlinnoise: {
                type: "t",
                value: new THREE.TextureLoader().load(
                    perlinNoise
                )
            },
            color4: {
                value: new THREE.Vector3(...options.color4)
            },
            time: {
                type: "f",
                value: 0.0,
            },
            noise: {
                type: "t",
                value: new THREE.TextureLoader().load(
                    noise
                )
            },
        }
        const geometry = new THREE.CylinderGeometry(3, 3, 3, 50, 50, true);
        const material = new THREE.ShaderMaterial({
            uniforms,
            // wireframe:true,
            vertexShader: vertflame,
            fragmentShader: fragflame,
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.set(0, Math.PI / 2, 0);
        mesh.position.set(0, 0, 0);
        mesh.scale.set(2, 1, 2);
        scene.add(mesh);
        addToUpdateList(uniforms)
    }

    createSmokeAround();
    createConeOfFlames();
    fireBall();
    createTargetFlame();
    group.rotateZ(-Math.PI / 2)
    group.position.y = 20;
    group.scale.set(2, 2, 2);

    scene.add(group);
    return group;
}

