export const dynamicColor = () => {
    AFRAME.registerComponent('dynamic-color', {
        init() {
            this.el.addEventListener('click', () => {
                this.el.emit('dynamic-color-element-clicked', {
                    element: this.el
                });
            })
        }
    });
}
