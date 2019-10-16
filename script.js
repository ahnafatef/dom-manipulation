/* Task 1 */

let h2 = document.getElementById('heading');
console.log(h2.textContent)


/* Task 2 using plain JavaScript */

// task 2a
let div2a = document.getElementById('task2a');


let btnAddTextToDiv2a = document.getElementById('addText');

btnAddTextToDiv2a.addEventListener('click', () => {
	let elementToAdd = document.createElement("p");
	let div2aPText = document.createTextNode("Hello world");
	elementToAdd.appendChild(div2aPText);
	div2a.appendChild(elementToAdd);
});


// task 2b

let greenBtn = document.getElementById('green');
let redBtn = document.getElementById('red');

greenBtn.addEventListener('click', () => {
	document.getElementById('body').style.backgroundColor = 'green';
})

redBtn.addEventListener('click', () => {
	document.getElementById('body').style.backgroundColor = 'red';
})

// task 2c
let goToGoogle = document.getElementById('google');

goToGoogle.addEventListener('click', () => {
	window.location.href = "https://www.google.com";
})


/* Task 4 using jQuery */
$('#addTextWithJQ').click(function(){
	$(task4a).append('<p>Hello world</p>');
});

$('#greenWithJQ').click(function(){
	$('body').css('backgroundColor', 'green');
});

$('#redWithJQ').click(function(){
	$('body').css('backgroundColor', 'red');
});

$('#addNum').click(function(){
	let result = Number($('#num_1').val()) + Number($('#num_2').val());
	$(this).after(`<p id=\'result\'>The sum is ${result}</p>`)
})