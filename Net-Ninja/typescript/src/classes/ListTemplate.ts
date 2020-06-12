import { HasFormatter } from '../interfaces/HasFormatter';

export class ListTemplate {
    constructor(private container: HTMLUListElement){}

    render(item : HasFormatter, heading : string , pos : 'start' | 'end'){
        const li = `
            <li>
                <h4>${heading}</h4>
                <p>${item.format()}</p>
            </li>
        `
        if(pos === 'start'){
            this.container.insertAdjacentHTML('afterbegin',li)
        }else{
            this.container.insertAdjacentHTML('beforeend',li)
        }
    }
}