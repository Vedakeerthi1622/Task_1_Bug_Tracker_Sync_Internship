const bugForm = document.getElementById('bugForm');
const bugTableBody = document.getElementById('bugTableBody');
let bugId = 1;

bugForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const reporter = document.getElementById('reporter').value;
    const assignee = document.getElementById('assignee').value;

    const bugRow = document.createElement('tr');
    bugRow.innerHTML = `
        <td>${bugId}</td>
        <td>${description}</td>
        <td>${reporter}</td>
        <td>${assignee}</td>
        <td>Open</td>
    `;
    bugTableBody.appendChild(bugRow);

    bugId++;
    bugForm.reset();
});
