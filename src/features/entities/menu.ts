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
        height="0.09"
        width="0.09"
        color="#00FFFF"
        position="-0.18 0.18 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#0000FF"
        position="-0.06 0.18 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#FF00FF"
        position="0.06 0.18 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#808080"
        position="0.18 0.18 0.02"
    >
    </a-plane>

    <a-plane
        height="0.09"
        width="0.09"
        color="#008000"
        position="-0.18 0.06 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#00FF00"
        position="-0.06 0.06 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#800000"
        position="0.06 0.06 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#000080"
        position="0.18 0.06 0.02"
    >
    </a-plane>

    <a-plane
        height="0.09"
        width="0.09"
        color="#808000"
        position="-0.18 -0.06 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#800080"
        position="-0.06 -0.06 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#FF0000"
        position="0.06 -0.06 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#C0C0C0"
        position="0.18 -0.06 0.02"
    >
    </a-plane>

    <a-plane
        height="0.09"
        width="0.09"
        color="#008080"
        position="-0.18 -0.18 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#FFFFFF"
        position="-0.06 -0.18 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#FFFF00"
        position="0.06 -0.18 0.02"
    >
    </a-plane>
    <a-plane
        height="0.09"
        width="0.09"
        color="#AAAAAA"
        position="0.18 -0.18 0.02"
    >
    </a-plane>
    <a-circle
        color="#333"
        radius="0.04"
        position="0.24 0.24 0.02"
        id="close-menu"
    ></a-circle>
</a-plane>
`