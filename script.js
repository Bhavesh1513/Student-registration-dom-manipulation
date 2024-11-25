const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const idInput = document.getElementById("id");
const classInput = document.getElementById("class");
const emailInput = document.getElementById("email");
const studentTable = document.getElementById("studentTable");
const addButton = document.getElementById("addButton");

// Function to save data to localStorage
const saveToLocalStorage = (students) => {
  localStorage.setItem("students", JSON.stringify(students));
};

// Function to get data from localStorage
const getFromLocalStorage = () => {
  const data = localStorage.getItem("students");
  return data ? JSON.parse(data) : [];
};

// Render students from localStorage
const renderStudents = () => {
  const students = getFromLocalStorage();
  studentTable.innerHTML = ""; 
  students.forEach((student) => {
    addStudentRow(student.name, student.id, student.className, student.email);
  });
};

// Function to add a new student row to the table
const addStudentRow = (name, id, className, email) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${id}</td>
    <td>${className}</td>
    <td>${email}</td>
    <td>
      <button class="btn-small editButton">Edit</button>
      <button class="btn-small deleteButton">Delete</button>
    </td>
  `;

  // Append the row to the table
  studentTable.appendChild(row);

  // Add functionality for edit and delete buttons
  const deleteButton = row.querySelector(".deleteButton");
  const editButton = row.querySelector(".editButton");

  deleteButton.addEventListener("click", () => {
    row.remove();

    // Update local storage
    let students = getFromLocalStorage();
    students = students.filter(
      (student) =>
        student.name !== name || student.id !== id || student.email !== email
    );
    saveToLocalStorage(students);
  });

  editButton.addEventListener("click", () => {
    nameInput.value = name;
    idInput.value = id;
    classInput.value = className;
    emailInput.value = email;

    row.remove();

    // Update local storage
    let students = getFromLocalStorage();
    students = students.filter(
      (student) =>
        student.name !== name || student.id !== id || student.email !== email
    );
    saveToLocalStorage(students);
  });
};

// Add student on button click
addButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const id = idInput.value.trim();
  const className = classInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !id || !className || !email) {
    alert("Please fill in all fields!");
    return;
  }

  addStudentRow(name, id, className, email);

  const students = getFromLocalStorage();
  students.push({ name, id, className, email });
  saveToLocalStorage(students);

  studentForm.reset();
});

// Initial render
renderStudents();
