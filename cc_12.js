//Task 1: Business Dashboard – DOM Element Selection and Creation
console.log("Task 1: Business Dashboard – DOM Element Selection and Creation")

// Step 1: Select the dashboard container using both getElementById and querySelector
const dashboardById = document.getElementById('dashboard'); // Using getElementById
const dashboardByQuery = document.querySelector('#dashboard'); // Using querySelector

// Step 2: Create a new <div> element for the metric card
const revenueCard = document.createElement('div');

// Step 3: Set attributes for the new element
revenueCard.setAttribute('class', 'metric-card'); // Add class
revenueCard.setAttribute('id', 'revenueCard'); // Add id

// Step 4: Populate the card with a title and placeholder value
revenueCard.innerHTML = `
    <strong>Revenue</strong><br>
    $0
`;

// Step 5: Append the new metric card to the dashboard container
dashboardById.appendChild(revenueCard); // Using getElementById