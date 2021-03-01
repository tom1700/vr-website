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
