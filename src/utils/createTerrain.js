import { PlaneGeometry, MeshBasicMaterial, TextureLoader, RepeatWrapping, Mesh } from "three";
import checkersTexture from "../assets/checkers.jpg";

export function createTerrain() {
    const groundGeometry = new PlaneGeometry(100, 100, 16, 16);
    const groundTexture = new TextureLoader().load(checkersTexture);
    groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(8, 8);
    const groundMaterial = new MeshBasicMaterial({ map: groundTexture  });
    const ground = new Mesh(groundGeometry, groundMaterial);
    ground.receiveShadow = true;
    ground.name = "ground";
    ground.rotateX(-Math.PI / 2)

    scene.add(ground);
}