import { createElement } from '@utils/element';
import { room as roomEntity } from '@features/room/room.entity';
import { player as playerEntity } from '@features/player/player.entity';
import { Vector3 } from 'three';

export const scene = () => {
    const element = createElement('a-scene', {
        'avatar-recorder': '',
        stats: '',
        background: 'color: #89D1FE'
    });

    element.append(roomEntity({
        initialPosition: new Vector3(0, 0, 0),
        initialSize: new Vector3(10, 3.5, 10)
    }));
    element.append(playerEntity({
        initialPosition: new Vector3(0, 0, 0)
    }))

    return element;
}
