
var titleElem = document.getElementsByTagName('h1')[0];
titleElem.addEventListener('click', function() {
    showMessage();
});

function showMessage() {
    alert('Hello World');
}