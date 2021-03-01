import { Vector3 } from 'three';

type RoomProps = {
    initialPosition: Vector3,
    initialSize: Vector3
};

export const roomEntity = ({
    initialPosition, initialSize
}: RoomProps) => `
<a-entity
    id="room"
    position="${initialPosition.toArray().join(' ')}"
>
    <a-plane
        height="${initialSize.z}"
        width="${initialSize.x}"
        rotation="-90 0 0"
        color="#FFF"
        position="0 0 0"
        dynamic-color
    ></a-plane>
    <a-plane
        height="${initialSize.z}"
        width="${initialSize.x}"
        rotation="90 0 0"
        color="#FFF"
        position="0 ${initialSize.y} 0"
        dynamic-color
    ></a-plane>
    <a-plane
        height="${initialSize.y}"
        width="${initialSize.x}"
        color="#AAA"
        position="0 ${initialSize.y / 2} ${-initialSize.z / 2}"
        dynamic-color
    ></a-plane>
    <a-plane
        height="${initialSize.y}"
        width="${initialSize.x}"
        rotation="0 180 0"
        color="#AAA"
        position="0 ${initialSize.y / 2} ${initialSize.z / 2}"
        dynamic-color
    ></a-plane>
    <a-plane
        height="${initialSize.y}"
        width="${initialSize.z}"
        rotation="0 90 0"
        color="#AAA"
        position="${-initialSize.x / 2} ${initialSize.y / 2} 0"
        dynamic-color
    ></a-plane>
    <a-plane
        height="${initialSize.y}"
        width="${initialSize.z}"
        rotation="0 -90 0"
        color="#AAA"
        position="${initialSize.x / 2} ${initialSize.y / 2} 0"
        dynamic-color
    ></a-plane>
</a-entity>
`
