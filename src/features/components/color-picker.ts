import { cameraId } from "@features/constants";
import { menuScreen } from "@features/entities/menu";
import { Vector3 } from "three";

export const colorPicker = () => {
    const axisY = new Vector3(0, 1, 0);

    AFRAME.registerComponent('color-picker', {
        isVisible: false,
        
        activeElement: null,

        hideScreen() {
            this.el.innerHTML = "";
            this.isVisible = false;
        },

        adjustPosition() {
            const newPosition = new Vector3(
                0,
                0,
                -1.1
            );
            const camera = document.getElementById(cameraId);
            // @ts-ignore
            newPosition.applyAxisAngle(axisY, camera.object3D.rotation.y);
            console.log(newPosition)
            this.el.object3D.position.x = newPosition.x;
            this.el.object3D.position.z = newPosition.z;
            // @ts-ignore
            this.el.object3D.rotation.y = camera.object3D.rotation.y
        },

        showScreen() {
            this.adjustPosition();
            this.el.innerHTML = menuScreen();
            this.isVisible = true;
        },

        init() {
            this.el.sceneEl.addEventListener(
                'dynamic-color-element-clicked',
                ({ detail: { element }}: { detail: { element: HTMLElement }
            }) => {
                if (this.activeElement === element) {
                    this.activeElement = null;
                    this.hideScreen();
                } else {
                    this.activeElement = element;
                    if (!this.isVisible) {
                        this.showScreen();
                    } else {
                        this.adjustPosition();
                    }
                }
            })

            this.el.addEventListener('click', (ev: any) => {
                const color = ev.target.getAttribute('color');
                if (this.activeElement) {
                    this.activeElement.setAttribute('color', color)
                }
            })
        }
    });
}
