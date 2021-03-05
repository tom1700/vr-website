import { Vector3 } from 'three';

type MenuProps = {
    initialPosition: Vector3,
};

export const menuEntity = ({
    initialPosition,
}: MenuProps) => `
<a-entity
    id="menu"
    position="${initialPosition.toArray().join(' ')}"
    color-picker
>
</a-entity>
`

export const menuScreen = () => `
<a-plane
    height="0.5"
    width="0.5"
    color="#000000"
    position="0 1.5 0"
>
    <a-plane
        height="0.2"
        width="0.2"
        color="#FF0000"
        position="-0.115 -0.115 0.02"
    >
    </a-plane>
    <a-plane
        height="0.2"
        width="0.2"
        color="#00FF00"
        position="0.115 -0.115 0.02"
    >
    </a-plane>
    <a-plane
        height="0.2"
        width="0.2"
        color="#0000FF"
        position="0.115 0.115 0.02"
    >
    </a-plane>
    <a-plane
        height="0.2"
        width="0.2"
        color="#FFFF00"
        position="-0.115 0.115 0.02"
    >
    </a-plane>
</a-plane>
`