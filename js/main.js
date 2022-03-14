import { capitalizeFirstCharacter, getTodaysDate } from './tools.js';

const contentElem = document.querySelector('.content');

contentElem.innerHTML = `
<p>${capitalizeFirstCharacter('this is a test')}</p>
<p>${getTodaysDate()}</p>
`;