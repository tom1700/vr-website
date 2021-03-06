import cancelButtonTexture from './cancel-button.png';
import floorTexture from './floor.jpg';

export const assetsEntity = () => `
    <a-assets>
        <img id="cancel-texture" src="${cancelButtonTexture}"></img>
        <img id="floor-texture" src="${floorTexture}"></img>
    </a-assets>
`;