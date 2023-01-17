// get the user input from the page
// Controller Function
function getValues() {

    // get values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    // parse our inputs as numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // verify our inputs ARE numbers

    if (Number.isInteger(startValue) && Number.isInteger(endValue))
    {
    // if they are, then generate numbers
        let numbersArray = generateNumbers(startValue, endValue)

    // then display on the page
        displayNumbers(numbersArray);
    } else {
        // if they are not, tell our user
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only integers are allowed for Range Maker!'
            }
        );
    }



}

// generate our numbers
// Logic Function
function generateNumbers(start, end) {

    let numbers = [];

    for(let value = start; value <= end; value++) {
        numbers.push(value);
    }

    return numbers;
}

// display them on the page
// View Function
function displayNumbers(numbersArray) {
    let tableBody = document.getElementById('results');

    let tableHtml = '';

    for(let i = 0; i < numbersArray.length; i++) {
        let value = numbersArray[i];
        let className = '';

        if(value % 2 == 0) {
            className = 'even';
        } else {
            className = 'odd';
        }

        if (i % 5 == 0) {
            tableHtml += '<tr>';
        }

        let tableRow = `<td class="${className}">${value}</td>`;


        tableHtml = tableHtml + tableRow;

        if ((i + 1) % 5 == 0) {
            tableHtml += '</tr>';
        }
    }

    tableBody.innerHTML = tableHtml;
}