
# Student Registration System

A simple Student Registration System built using HTML, CSS, and JavaScript. This system allows users to register students with their name, ID, class, and email. The data is stored locally using `localStorage` to persist across page reloads. Students can be added, edited, and deleted from a dynamically generated table.

## Features

- **Add Student**: Allows the user to input and save student details (Name, ID, Class, Email).
- **Edit Student**: Enables the user to edit student details by clicking the "Edit" button.
- **Delete Student**: Allows the user to remove a student's entry from the table.
- **Data Persistence**: The list of students is saved in the browser's `localStorage`, ensuring the data persists even after page reloads.

## Technologies Used

- **HTML**: For the basic structure and layout of the registration form and table.
- **CSS**: For styling the page.
- **JavaScript**: For handling the form input, dynamic table generation, and localStorage operations.

## Getting Started

To use this system locally, follow the steps below:

1. Clone this repository:
   ```bash
   https://github.com/Bhavesh1513/Student-registration-dom-manipulation.git
   ```

2. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```

## How It Works

1. When a student is added, the data is saved to `localStorage`.
2. The student list is dynamically rendered from `localStorage` when the page is loaded or reloaded.
3. Each student has "Edit" and "Delete" buttons.
   - **Edit**: Clicking this button will pre-fill the form with the student's data, allowing the user to update it.
   - **Delete**: Clicking this button will remove the student's data from the list and update `localStorage`.

## Folder Structure

```
/student-registration-system
    ├── index.html         # Main HTML file
    ├── style.css          # CSS styles
    ├── script.js          # JavaScript logic
    └── README.md          # This README file
```
## Output:
![image](https://github.com/user-attachments/assets/bd21f8dd-78aa-4334-b7d1-6540ca804b78)


