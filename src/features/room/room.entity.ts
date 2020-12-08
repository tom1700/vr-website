import { createElement } from "@utils/element";
import { Vector3 } from 'three';

type RoomProps = {
    initialPosition: Vector3,
    initialSize: Vector3
};

export const room = ({
    initialPosition,
    initialSize
}: RoomProps) => {
    const element = createElement('a-entity', {
        'room': '',
        position: initialPosition,
    });
    const floor = createElement('a-plane', {
        height: initialSize.z,
        width: initialSize.x,
        rotation: new Vector3(-90, 0, 0),
        color: '#FFFFFF',
        position: new Vector3(0, 0, 0)
    });
    const ceiling = createElement('a-plane', {
        height: initialSize.z,
        width: initialSize.x,
        rotation: new Vector3(90, 0, 0),
        color: '#FFFFFF',
        position: new Vector3(0, initialSize.y, 0)
    });
    const backtWall = createElement('a-plane', {
        height: initialSize.y,
        width: initialSize.x,
        position: new Vector3(0, initialSize.y / 2, -initialSize.z / 2),
        color: '#AAAAAA'
    });
    const frontWall = createElement('a-plane', {
        height: initialSize.y,
        width: initialSize.x,
        position: new Vector3(0, initialSize.y / 2, initialSize.z / 2),
        rotation: new Vector3(0, 180, 0),
        color: '#AAAAAA'
    });
    const leftWall = createElement('a-plane', {
        height: initialSize.y,
        width: initialSize.z,
        position: new Vector3(-initialSize.x / 2, initialSize.y / 2, 0),
        rotation: new Vector3(0, 90, 0),
        color: '#AAAAAA'
    })
    const rightWall = createElement('a-plane', {
        height: initialSize.y,
        width: initialSize.z,
        position: new Vector3(initialSize.x / 2, initialSize.y / 2, 0),
        rotation: new Vector3(0, -90, 0),
        color: '#AAAAAA'
    })

    element.append(floor);
    element.append(backtWall);
    element.append(frontWall);
    element.append(ceiling);
    element.append(leftWall);
    element.append(rightWall);

    return element;
}