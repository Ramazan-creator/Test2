

import { AbstractComponent } from './AbstractComponent.js';

function createListComponentTemplate() {
    return (

        `<select id="city-select">
        <option value="">Выберите город</option>
        <option value="London">Лондон</option>
        <option value="Paris">Париж</option>
        <option value="Berlin">Берлин</option>
        </select>`
    );
}

export class ListComponent extends AbstractComponent {

    getTemplate() {
        return createListComponentTemplate();
    }
}

  

