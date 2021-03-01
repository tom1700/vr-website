export const dynamicColor = () => {
    AFRAME.registerComponent('dynamic-color', {
        isActive: false,
        init() {
            this.el.addEventListener('click', () => {
                if (this.isActive) {
                    this.el.emit('dynamic-color-unselected');
                    this.isActive = false;
                } else {
                    this.el.emit('dynamic-color-selected', {
                        element: this.el
                    });
                    this.isActive = true;
                }

                this.el.sceneEl.addEventListener('dynamic-color-selected', (el: HTMLElement) => {
                    if (el !== this.el) {
                        this.isActive = false;
                    }
                })
            })
        }
    });
}
