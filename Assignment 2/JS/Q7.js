// Get DOM elements
const arrayInput = document.getElementById('arrayInput');
const valueInput = document.getElementById('valueInput');
const resultDiv = document.getElementById('result');

// Helper function to parse input into array
function getArrayFromInput() {
    return arrayInput.value.split(',').map(item => item.trim());
}

// Check if an array contains a specified value
document.getElementById('checkValueButton').addEventListener('click', () => {
    const array = getArrayFromInput();
    const value = valueInput.value.trim();
    const containsValue = array.includes(value);
    resultDiv.innerHTML = `Array contains "${value}": ${containsValue}`;
});

// Insert item in an array
document.getElementById('insertItemButton').addEventListener('click', () => {
    const array = getArrayFromInput();
    const value = valueInput.value.trim();
    array.push(value);
    resultDiv.innerHTML = `Array after insertion: [${array.join(', ')}]`;
});

// Append an object to an array
document.getElementById('appendObjectButton').addEventListener('click', () => {
    const array = getArrayFromInput();
    const value = valueInput.value.trim();
    const obj = { value };
    array.push(obj);
    resultDiv.innerHTML = `Array after appending object: [${array.map(item => JSON.stringify(item)).join(', ')}]`;
    // resultDiv.innerHTML = `Array after appending object: [${array.join(', ')}]`;
});

// Check if a value is an array
document.getElementById('checkObjectButton').addEventListener('click', () => {
    const value = valueInput.value.trim();
    // const isArray = Array.isArray(JSON.parse(value));
    // resultDiv.innerHTML = `"${value}" is an array: ${isArray}`;

    // Validate the input
    try {
        const parsedValue = JSON.parse(value);
        const isArray = Array.isArray(parsedValue);
        resultDiv.innerHTML = `"${value}" is an array: ${isArray}`;
    } catch (error) {
        resultDiv.innerHTML = `"${value}" is not valid JSON.`;
    }
});

// Empty an array
document.getElementById('emptyArrayButton').addEventListener('click', () => {
    const array = [];
    resultDiv.innerHTML = `Array emptied: [${array.join(', ')}]`;
});

// Add element to the start of an array
document.getElementById('addElementButton').addEventListener('click', () => {
    const array = getArrayFromInput();
    const value = valueInput.value.trim();
    array.unshift(value);
    resultDiv.innerHTML = `Array after adding element to start: [${array.join(', ')}]`;
});

// Remove duplicates from an array
document.getElementById('removeDuplicatesButton').addEventListener('click', () => {
    const array = getArrayFromInput();
    const uniqueArray = [...new Set(array)];
    resultDiv.innerHTML = `Array after removing duplicates: [${uniqueArray.join(', ')}]`;
});

// Merge two arrays and remove duplicate items
document.getElementById('mergeArraysButton').addEventListener('click', () => {
    const array1 = getArrayFromInput();
    const array2 = prompt("Enter second array (comma-separated):").split(',').map(item => item.trim());
    const mergedArray = [...new Set([...array1, ...array2])];
    resultDiv.innerHTML = `Merged array with unique items: [${mergedArray.join(', ')}]`;
});

// Sort array of objects by property values
document.getElementById('sortArrayButton').addEventListener('click', () => {
    // const array = getArrayFromInput().map(item => ({ value: item }));
    // const sortedArray = array.sort((a, b) => a.value.localeCompare(b.value));
    // resultDiv.innerHTML = `Sorted array of objects: [${sortedArray.map(item => JSON.stringify(item)).join(', ')}]`;
    const array = getArrayFromInput();
    const sortedArray = array.sort((a, b) => a.localeCompare(b));
    resultDiv.innerHTML = `Sorted array of objects: [${sortedArray.join(', ')}]`;
});

// Get random item from an array
document.getElementById('randomItemButton').addEventListener('click', () => {
    const array = getArrayFromInput().filter(item => item.trim() !== '');
    // console.log(array);
    // console.log(array.length);
    if (array.length === 0) {
        resultDiv.innerHTML = 'Array is empty.';
        return;
    }
    const randomItem = array[Math.floor(Math.random() * array.length)];
    resultDiv.innerHTML = `Random item from array: ${randomItem}`;
});