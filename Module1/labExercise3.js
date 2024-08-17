// labExercise3.js

function changeColumn1() {
    const column = document.getElementById('column1');
    const heading = document.getElementById('heading1');
    const textbox = document.getElementById('textbox1');

    column.style.backgroundColor = 'lightblue';
    heading.textContent = textbox.value || 'Manchester';
}

function changeColumn2() {
    const column = document.getElementById('column2');
    const heading = document.getElementById('heading2');
    const textbox = document.getElementById('textbox2');

    column.style.backgroundColor = 'lightgreen';
    heading.textContent = textbox.value || 'Nepal';
}

document.getElementById('changeButton1').addEventListener('click', changeColumn1);
document.getElementById('changeButton2').addEventListener('click', changeColumn2);
