import * as tools from './tools.js';

const contentElem = document.querySelector('.content');

contentElem.innerHTML = `
<p>${tools.capitalizeFirstCharacter('this is another test')}</p>
<p>${tools.getTodaysDate()}</p>
`;