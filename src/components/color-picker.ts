
import { registerComponent, THREE } from "aframe";
// import { colorMenuScreen } from "entities/color-menu";
import * as config from "config";

const { Vector3 } = THREE;

export const colorPicker = () => {
    const axisY = new Vector3(0, 1, 0);

    registerComponent('color-picker', {
        isVisible: false,
        
        activeElement: null,

        hideScreen() {
            this.el.setAttribute('visible', false);
            this.isVisible = false;
            this.el.querySelectorAll('[data-color-option]').forEach((colorOption: HTMLElement) => {
                colorOption.removeAttribute('data-raycastable')
            })
        },

        adjustPosition() {
            const newPosition = new Vector3(
                0,
                0,
                -1.1
            );
            // @ts-ignore
            const cameraObject3D = document.getElementById(config.ids.camera).object3D;
            newPosition.applyAxisAngle(axisY, cameraObject3D.rotation.y);
            this.el.object3D.position.x = cameraObject3D.position.x + newPosition.x;
            this.el.object3D.position.z = cameraObject3D.position.z + newPosition.z;
            // @ts-ignore
            this.el.object3D.rotation.y = cameraObject3D.rotation.y
        },

        showScreen() {
            this.adjustPosition();
            this.el.setAttribute('visible', true);
            this.el.querySelectorAll('[data-color-option]').forEach((colorOption: HTMLElement) => {
                colorOption.setAttribute('data-raycastable', '')
            })
            this.isVisible = true;
        },

        init() {
            this.el.setAttribute('visible', false);
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
                } else if (element.hasAttribute('data-color-option')){
                    const color = ev.target.getAttribute('color');
                    if (this.activeElement) {
                        this.activeElement.setAttribute('color', color)
                    }
                }
            })
        }
    });
}
