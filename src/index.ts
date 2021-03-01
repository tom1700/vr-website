import { sceneEntity } from './features/entities/scene';
import { motionControl } from './features/components/motion-control';
import { rotationControl } from './features/components/rotation-control';
import { dynamicColor} from './features/components/dynamic-color';
import { colorPicker } from './features/components/color-picker'

const registerComponents = () => [
    motionControl,
    rotationControl,
    dynamicColor,
    colorPicker
].forEach(component => component());

registerComponents();

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');

    rootElement.innerHTML = sceneEntity();
})