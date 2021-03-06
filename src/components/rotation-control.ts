import { registerComponent } from 'aframe';
import * as config from "config";

export const rotationControl = () => {
    const rotationSpeed = 0.1;

    registerComponent('thumbstick-rotation-control', {
        init() {
            this.el.addEventListener('thumbstickmoved', (event: any) => this.updatePlayer(event));
            this.playerElement = document.getElementById(config.ids.player);
        },
        updatePlayer(event: any) {
            this.playerElement.object3D.rotation.x -= event.detail.x * rotationSpeed;
        },
    });
}
