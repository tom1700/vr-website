import { scene as sceneEntity } from './features/scene/scene.entity';
import { motionControl } from './features/player/motion-control.component';
import { rotationControl } from './features/player/rotation-control.component';

const registerComponents = () => [
    motionControl,
    rotationControl,
].forEach(component => component());

registerComponents();

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');

    rootElement.append(sceneEntity());
})