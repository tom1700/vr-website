import { sceneEntity } from './entities/scene';
import { motionControl } from './components/motion-control';
import { rotationControl } from './components/rotation-control';
import { dynamicColor} from './components/dynamic-color';
import { colorPicker } from './components/color-picker'

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