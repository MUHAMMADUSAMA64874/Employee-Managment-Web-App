document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('employeeID').value || Date.now();
    const name = document.getElementById('employeeName').value;
    const role = document.getElementById('employeeRole').value;
    const department = document.getElementById('employeeDepartment').value;
    const salary = document.getElementById('employeeSalary').value;
    const task = document.getElementById('employeeTask').value;
    const deadline = document.getElementById('employeeDeadline').value;

    const newEmployee = {
        id,
        name,
        role,
        department,
        salary,
        task,
        deadline,
        completed: false
    };

    let employees = JSON.parse(localStorage.getItem('employees')) || [];

    const existingIndex = employees.findIndex(emp => emp.id == id);
    if (existingIndex !== -1) {
        employees[existingIndex] = newEmployee;
    } else {
        employees.push(newEmployee);
    }

    localStorage.setItem('employees', JSON.stringify(employees));
    loadEmployeeList();
    document.getElementById('employeeForm').reset();
    alert('Employee saved successfully!');
});

function loadEmployeeList() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeeTableBody = document.getElementById('employeeTableBody');
    employeeTableBody.innerHTML = '';

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.role}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.task}</td>
            <td>${employee.deadline}</td>
            <td>${employee.completed ? 'Completed' : 'Pending'}</td>
            <td>
                <button onclick="editEmployee(${employee.id})" class="btn btn-warning">Edit</button>
                <button onclick="deleteEmployee(${employee.id})" class="btn btn-danger">Delete</button>
            </td>
        `;
        employeeTableBody.appendChild(row);
    });
}

function editEmployee(id) {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = employees.find(emp => emp.id == id);

    if (employee) {
        document.getElementById('employeeID').value = employee.id;
        document.getElementById('employeeName').value = employee.name;
        document.getElementById('employeeRole').value = employee.role;
        document.getElementById('employeeDepartment').value = employee.department;
        document.getElementById('employeeSalary').value = employee.salary;
        document.getElementById('employeeTask').value = employee.task;
        document.getElementById('employeeDeadline').value = employee.deadline;
    }
}

function deleteEmployee(id) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees = employees.filter(emp => emp.id != id);
    localStorage.setItem('employees', JSON.stringify(employees));
    loadEmployeeList();
    alert('Employee deleted successfully!');
}

loadEmployeeList();
