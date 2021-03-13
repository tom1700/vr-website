import { motionControl } from './components/motion-control';
import { rotationControl } from './components/rotation-control';
import { dynamicColor } from './components/dynamic-color';
import { colorPicker } from './components/color-picker';
import { propagateComponent } from './components/propagate-component';

const registerComponents = () => [
    motionControl,
    rotationControl,
    dynamicColor,
    colorPicker,
    propagateComponent
].forEach(component => component());

registerComponents();