import * as THREE from 'three';
export function createBox(){
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 3, 0);
    bloomEffect.selection.toggle(mesh);
    scene.add(mesh);
}