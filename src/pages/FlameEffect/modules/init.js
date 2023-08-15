import { createCamera } from '../../../utils/createCamera';
import { createRenderer } from '../../../utils/createRenderer';
import { createScene } from '../../../utils/createScene';
import { createOrbitControl } from '../../../utils/createOrbitControl';
import { createTerrain } from '../../../utils/createTerrain';
import { createFlame } from './createFlame';
import { createBox } from './createBox';

export function init() {
    createCamera();
    createScene();
    createRenderer();
    createOrbitControl();
    createTerrain();
    createFlame();
}