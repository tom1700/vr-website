import { playerId } from './constants';

export const rotationControl = () => {
    const rotationSpeed = 0.1;

    AFRAME.registerComponent('thumbstick-rotation-control', {
        init() {
            this.el.addEventListener('thumbstickmoved', (event: any) => this.updatePlayer(event));
            this.playerElement = document.getElementById(playerId);
        },
        updatePlayer(event: any) {
            this.playerElement.object3D.rotation.x -= event.detail.x * rotationSpeed;
        },
    });
}
