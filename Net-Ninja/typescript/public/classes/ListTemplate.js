export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = `
            <li>
                <h4>${heading}</h4>
                <p>${item.format()}</p>
            </li>
        `;
        if (pos === 'start') {
            this.container.insertAdjacentHTML('afterbegin', li);
        }
        else {
            this.container.insertAdjacentHTML('beforeend', li);
        }
    }
}
