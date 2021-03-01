import { roomEntity } from '@features/entities/room';
import { playerEntity } from '@features/entities/player';
import { Vector3 } from 'three';
import { menuEntity } from './menu';

export const sceneEntity = () => `
<a-scene
    avatar-recorder
    stats
    background="color: #89D1F"
>
    ${roomEntity({ 
        initialPosition: new Vector3(0, 0, 0),
        initialSize: new Vector3(10, 3.5, 10)
    })}
    ${playerEntity({ 
        initialPosition: new Vector3(0, 0, 0)
    })}
</a-scene>
`
