
import { Vector3 } from 'three';
import { colorMenuEntity } from './color-menu';
import { cameraId, playerId } from './constants';

type PlayerProps = {
    initialPosition: Vector3
};

export const playerEntity = ({ initialPosition }: PlayerProps) => `
<a-entity
    id="${playerId}"
    position="${initialPosition.toArray().join(' ')}"
>
    <a-entity
        oculus-touch-controls="hand: right"
        thumbstick-motion-control=""
    ></a-entity>
    <a-entity
        oculus-touch-controls="hand: right"
        thumbstick-rotation-control=""
    ></a-entity>
    <a-camera
        id="${cameraId}"
        look-controls="pointerLockEnabled: true"
    >
        <a-cursor></a-cursor>
    </a-camera>
    ${colorMenuEntity({
        initialPosition: new Vector3(0, 0, 0)
    })}
</a-entity>
`