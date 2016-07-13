//Practice with Forms and the DOM Event Model

// 1
function fn1() {
    window.alert('I have been clicked');
}

// 2
btn2.addEventListener("click", fn2, false);
function fn2() {	
	window.alert("I have been clicked");
}

// 3
btn3.addEventListener("click", fn3, false);
function fn3() {	
	window.alert("I have been clicked");
}

// 4
btn4.addEventListener("click", function() {	
	window.alert("I have been clicked");
}, false);

//6
redirect.addEventListener('click', function(event) {
    event.preventDefault();
    window.alert('You just clicked on Google link. But why?')
});

// 7
btn7.addEventListener("click", function() {	
    btn7.disabled = true;
	window.alert(document.getElementById('tinput7').value);
}, false);


















