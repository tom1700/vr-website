export const colorPicker = () => {
    AFRAME.registerComponent('color-picker', {
        getScreen() {
            const screenElement = document.createElement('a-plane');
            screenElement.setAttribute('height', 0.5);
            screenElement.setAttribute('width', 1);
            screenElement.setAttribute('color', '#FF0000');
            screenElement.setAttribute('position', '0 1.5 -2')

            return screenElement;
        },
        init() {
            this.el.sceneEl.addEventListener('dynamic-color-unselected', () => {
                this.el.removeChild(this.screen);
                this.screen = null;
            });
            this.el.sceneEl.addEventListener('dynamic-color-selected', () => {
                this.screen = this.getScreen();
                this.el.appendChild(this.screen);
            })
        }
    });
}
