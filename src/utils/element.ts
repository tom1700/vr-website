export const createElement = (name: string, attributes: object) => {
    const element = document.createElement(name);

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    })

    return element;
}