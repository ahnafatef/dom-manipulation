/* Task 1 */

let h2 = document.getElementById('heading');
console.log(h2.textContent)


/* Task 2 using plain JavaScript */
let div2a = document.getElementById('task2a');


let btnAddTextToDiv2a = document.getElementById('addText');

btnAddTextToDiv2a.addEventListener('click', ()=>{
	let elementToAdd = document.createElement("p");
	let div2aPText = document.createTextNode("Hello world");
	elementToAdd.appendChild(div2aPText);
	div2a.appendChild(elementToAdd);
});


/* Task 4 using jQuery */
