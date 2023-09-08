const notepad = document.getElementById('notepad');
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');

// Load saved text from localStorage when the page loads
notepad.value = localStorage.getItem('savedText') || '';

// Save text to localStorage when the Save button is clicked
saveButton.addEventListener('click', () => {
    const textToSave = notepad.value;
    localStorage.setItem('savedText', textToSave);
});

// Clear the notepad and remove saved text from localStorage when the Clear button is clicked
clearButton.addEventListener('click', () => {
    notepad.value = '';
    localStorage.removeItem('savedText');
});