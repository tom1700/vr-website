import { Vector3 } from 'three';
import { createElement } from "@utils/element";
import { playerId } from './constants';

type PlayerProps = {
    initialPosition: Vector3
};

export const player = ({ initialPosition }: PlayerProps) => {
    const element = createElement('a-entity', {
        'id': playerId,
        'position': initialPosition
    });
    const oculusLeftControls = createElement('a-entity', {
        'oculus-touch-controls': 'hand: right',
        'thumbstick-motion-control': ""
    });
    const oculusRightControls = createElement('a-entity', {
        'oculus-touch-controls': 'hand: right',
        'thumbstick-rotation-control': ""
    });
    const camera = createElement('a-camera', {
        id: 'camera'
    });

    element.append(oculusLeftControls);
    element.append(oculusRightControls);
    element.append(camera);

    return element;
}
