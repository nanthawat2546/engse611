const exercises = [
    "Changing Text Content",
    "Modifying CSS Styles",
    "Adding and Removing Classes",
    "Creating and Appending Elements",
    "Removing Elements",
    "Handling Events",
    "Traversing the DOM",
    "Manipulating Form Elements",
    "Fetching and Displaying Data",
    "Animations and Transitions"
];

const tableBody = document.getElementById("exerciseTable");
exercises.forEach((exercise, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>Exercise ${index + 1}: ${exercise}</td>
        <td><button onclick="showExercise(${index + 1})">Show me</button></td>
    `;
    tableBody.appendChild(row);
});

function showExercise(num) {
    alert(`Exercise ${num} selected!`);
}
