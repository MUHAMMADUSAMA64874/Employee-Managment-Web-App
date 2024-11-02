document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('employeeName').value;
    const id = document.getElementById('employeeID').value;
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    const employee = employees.find(emp => emp.name === name && emp.id == id);

    if (employee) {
        alert('Login successful!');
        localStorage.setItem('loggedInEmployee', JSON.stringify(employee));
        window.location.href = 'taskDashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
