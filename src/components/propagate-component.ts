import { registerComponent, DetailEvent } from "aframe";

interface Detail {
    name: string;
}

export const propagateComponent = () => {
    registerComponent('propagate-component', {
        schema: { type: 'string' },
        init() {
            this.el.addEventListener('componentchanged', (evt: DetailEvent<Detail>) => {
                if (evt.detail.name === this.data) {
                    this.propagateComponent();
                }
            });

            this.propagateComponent()
        },

        propagateComponent() {
            const material = this.el.getAttribute(this.data);

            this.el.getChildren().forEach((child: HTMLElement) => {
                child.setAttribute(this.data, material)
            })
        }
    });
}
