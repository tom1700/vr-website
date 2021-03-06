
import { registerComponent } from "aframe";
import { colorMenuScreen } from "entities/color-menu";
import { cameraId } from "entities/constants";
import { Vector3 } from "three";

export const colorPicker = () => {
    const axisY = new Vector3(0, 1, 0);

    registerComponent('color-picker', {
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
            // @ts-ignore
            const cameraObject3D = document.getElementById(cameraId).object3D;
            newPosition.applyAxisAngle(axisY, cameraObject3D.rotation.y);
            this.el.object3D.position.x = cameraObject3D.position.x + newPosition.x;
            this.el.object3D.position.z = cameraObject3D.position.z + newPosition.z;
            // @ts-ignore
            this.el.object3D.rotation.y = cameraObject3D.rotation.y
        },

        showScreen() {
            this.adjustPosition();
            this.el.innerHTML = colorMenuScreen();
            this.isVisible = true;
        },

        init() {
            this.el.sceneEl.addEventListener(
                'dynamic-color-element-clicked',
                ({ detail: { element }}: { detail: { element: HTMLElement }
            }) => {
                this.activeElement = element;
                if (!this.isVisible) {
                    this.showScreen();
                } else {
                    this.adjustPosition();
                }
            })

            this.el.addEventListener('click', (ev: any) => {
                const element = ev.target;

                if (element.id === 'close-menu') {
                    this.hideScreen();                    
                } else {
                    const color = ev.target.getAttribute('color');
                    if (this.activeElement) {
                        this.activeElement.setAttribute('color', color)
                    }
                }
            })
        }
    });
}