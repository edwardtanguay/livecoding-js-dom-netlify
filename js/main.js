import * as tools from './tools.js';
import { flashcards } from './data/flashcards.js';

const contentElem = document.querySelector('.content');

contentElem.innerHTML = `
<p>${tools.getTodaysDate()}</p>
<div className="flashcards">
	${flashcards.map(flashcard => {
		return `<div class="front">${flashcard.category}: ${flashcard.front}</div>
		<div className="back">${flashcard.back}</div>	
		`;
	}).join('')}
</div>
`;