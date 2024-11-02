document.addEventListener('DOMContentLoaded', loadTaskDashboard);

function loadTaskDashboard() {
    const employee = JSON.parse(localStorage.getItem('loggedInEmployee'));

    if (!employee) {
        alert('No logged-in employee found. Redirecting to login.');
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('taskList').innerHTML = `
        <h4>Welcome, ${employee.name}</h4>
        <p><strong>Task:</strong> ${employee.task || 'No task assigned'}</p>
        <p><strong>Deadline:</strong> ${employee.deadline || 'N/A'}</p>
        <button class="btn btn-${employee.completed ? 'success' : 'secondary'}"
                onclick="toggleTaskCompletion()">
            Mark as ${employee.completed ? 'Incomplete' : 'Completed'}
        </button>
    `;
}

function toggleTaskCompletion() {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = JSON.parse(localStorage.getItem('loggedInEmployee'));

    const index = employees.findIndex(emp => emp.id == employee.id);
    if (index !== -1) {
        employees[index].completed = !employees[index].completed;
        localStorage.setItem('employees', JSON.stringify(employees));
        localStorage.setItem('loggedInEmployee', JSON.stringify(employees[index]));
        loadTaskDashboard();
    }
}
