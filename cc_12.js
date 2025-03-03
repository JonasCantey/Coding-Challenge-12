//Task 1: Business Dashboard – DOM Element Selection and Creation
console.log("Task 1: Business Dashboard – DOM Element Selection and Creation")

//Select the dashboard container using both getElementById and querySelector
const dashboardById = document.getElementById('dashboard'); // Using getElementById
const dashboardByQuery = document.querySelector('#dashboard'); // Using querySelector

//Create a new <div> element for the metric card
const revenueCard = document.createElement('div');

//Set attributes for the new element
revenueCard.setAttribute('class', 'metric-card'); // Add class
revenueCard.setAttribute('id', 'revenueCard'); // Add id

//Populate the card with a title and placeholder value
revenueCard.innerHTML = `
    <strong>Revenue</strong><br>
    $0
`;


// doing same steps above to add the required expenses metric card
const expensesCard = document.createElement('div');

//Set attributes for the new element
expensesCard.setAttribute('class', 'metric-card'); // Add class
expensesCard.setAttribute('id', 'expensesCard'); // Add id

//Populate the card with a title and placeholder value
expensesCard.innerHTML = `
    <strong>Expenses</strong><br>
    $0
`;

//doing same steps above to add required profit metric card
const profitCard = document.createElement('div');

//Set attributes for the new element
profitCard.setAttribute('class', 'metric-card'); // Add class
profitCard.setAttribute('id', 'profitCard'); // Add id

//Populate the card with a title and placeholder value
profitCard.innerHTML = `
    <strong>Profit</strong><br>
    $0
`;

//Append the new metric cards to the dashboard container
dashboardById.appendChild(revenueCard); // Using getElementById
dashboardById.appendChild(expensesCard);
dashboardById.appendChild(profitCard);

//Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
console.log("Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays")

const metricCards = document.querySelectorAll('.metric-card');

// Step 2: Convert the NodeList to an array
const metricCardsArray = Array.from(metricCards); // Using Array.from

// Step 3: Use .forEach() to update each card
metricCardsArray.forEach((card) => {
    // Update the text content
    card.textContent += ' - Updated'; // Append " - Updated" to the current text

    // Update the style (change the background color)
    card.style.backgroundColor = 'lightgreen'; // Change the background color
});