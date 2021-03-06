import { roomEntity } from '@features/entities/room';
import { playerEntity } from '@features/entities/player';
import cancelButtonTexture from '../cancel-button.png';
import floorTexture from '../floor.jpg';
import { Vector3 } from 'three';

export const sceneEntity = () => `
<a-scene
    avatar-recorder
    stats
    background="color: #89D1F"
>
    <a-assets>
        <img id="cancel-texture" src="${cancelButtonTexture}"></img>
        <img id="floor-texture" src="${floorTexture}"></img>
    </a-assets>
    ${roomEntity({ 
        initialPosition: new Vector3(0, 0, 0),
        initialSize: new Vector3(10, 3.5, 10)
    })}
    ${playerEntity({ 
        initialPosition: new Vector3(0, 0, 0)
    })}
</a-scene>
`
