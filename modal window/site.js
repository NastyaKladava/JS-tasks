function onBackDropClick() {
    const backdropElem = document.querySelector('.backdrop');
    backdropElem.classList.add('hidden');
}

function preventPropagation(event) {
    event.stopPropagation();
}

function onButtonClick(event) {
    //preventPropagation(event);
    console.log('sending data...');
}