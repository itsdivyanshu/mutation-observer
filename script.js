const container = document.getElementById('container');

//this function adds a new element to the div
function addElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'New Element';

    container.appendChild(newElement);
}

//this function generates random background color to the div
function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    container.style.backgroundColor = randomColor;
}

//this function resets the div
function resetContainer() {
    //first we will clear all the child elements
    container.innerHTML = '';
    //then we reset the bg color
    container.style.backgroundColor = '';
}

//this is the observer to detect mutations in the container
const observer = new MutationObserver(function(mutations){
    mutations.forEach((mutation) => {
        if(mutation.type === 'childList') {
            console.log('Added nodes: ', mutation.addedNodes);
            console.log('Removed nodes: ', mutation.removedNodes);
        }
        if(mutation.type === 'attributes') {
            console.log("Background color changed to: ", container.style.backgroundColor)
        }
    });
});

//config for the observer
const config = {
    childList: true, 
    subTree: true,
    attributes: true
};

//starting to observe the contaiener
observer.observe(container, config);

//button event listeners
document.getElementById('addElementBtn').addEventListener('click', addElement);
document.getElementById('randomColorBtn').addEventListener('click', generateRandomColor);
document.getElementById('resetBtn').addEventListener('click', resetContainer);


