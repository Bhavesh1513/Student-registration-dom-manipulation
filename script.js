const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const idInput = document.getElementById("id");
const classInput = document.getElementById("class");
const rollInput = document.getElementById("roll");
const studentTable = document.getElementById("studentTable");
const addButton = document.getElementById("addButton");

// Function to save data to localStorage
const saveToLocalStorage = (students) => {
    // Convert students array to a JSON string and save it in localStorage
  localStorage.setItem("students", JSON.stringify(students));
};

// Function to get data from localStorage
const getFromLocalStorage = () => {
    // Retrieve students data from localStorage and parse it into an array
  const data = localStorage.getItem("students");
  return data ? JSON.parse(data) : [];
};

// Render students from localStorage
const renderStudents = () => {
  const students = getFromLocalStorage();
  studentTable.innerHTML = ""; 
  students.forEach((student) => {
    addStudentRow(student.name, student.id, student.className, student.roll);
  });
};

// Function to add a new student row to the table
const addStudentRow = (name, id, className, roll) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${id}</td>
    <td>${className}</td>
    <td>${roll}</td>
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
        student.name !== name || student.id !== id || student.roll !== roll
    );
    saveToLocalStorage(students);
  });

  editButton.addEventListener("click", () => {
    nameInput.value = name;
    idInput.value = id;
    classInput.value = className;
    rollInput.value = roll;

    row.remove();

    // Update local storage
    let students = getFromLocalStorage();
    students = students.filter(
      (student) =>
        student.name !== name || student.id !== id || student.roll !== roll
    );
    saveToLocalStorage(students);
  });
};


addButton.addEventListener("click", () => {
    // trim any extra spaces
  const name = nameInput.value.trim();
  const id = idInput.value.trim();
  const className = classInput.value.trim();
  const roll = rollInput.value.trim();


  if (!name || !id || !className || !roll) {
    alert("Please fill in all fields!");
    return;
  }

  addStudentRow(name, id, className, roll);

 
  const students = getFromLocalStorage();
  students.push({ name, id, className, roll });
  saveToLocalStorage(students);


  studentForm.reset();
});


renderStudents();
