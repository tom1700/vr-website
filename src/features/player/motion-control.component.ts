import { Vector3 } from 'three';
import { cameraId, playerId } from './constants';

export const motionControl = () => {
    const axisY = new Vector3(0, 1, 0);
    const movementSpeed = 0.25;

    AFRAME.registerComponent('thumbstick-motion-control', {
        init() {
            this.el.addEventListener('thumbstickmoved', (event: any) => this.updatePlayer(event));
            this.playerElement = document.getElementById(playerId);
            this.cameraElement = document.getElementById(cameraId);
        },
        updatePlayer(event: any) {
            const movement = new Vector3(
                event.detail.x,
                0,
                event.detail.y
            );
            movement.applyAxisAngle(axisY, this.playerElement.object3D.rotation.y);
            movement.applyAxisAngle(axisY, this.cameraElement.object3D.rotation.y);
            this.playerElement.object3D.position.x += movement.x * movementSpeed;
            this.playerElement.object3D.position.y += movement.y * movementSpeed;
        },
    });
}
