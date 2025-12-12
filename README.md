# Simple Todo App

A basic todo list application where you can add tasks, mark them complete, and delete them. Built with vanilla JavaScript classes to practice object-oriented programming.

## Functionality

This app lets you manage a simple todo list:

- Add new todos with a name and optional due date using a popup form
- Check off todos when you complete them
- Delete todos you don't need anymore
- See a live counter showing "X out of Y completed"

The form validates your input in real-time and won't let you submit if required fields are empty. You can close the popup by clicking the X button, clicking outside the form, or pressing the Escape key.

## Technology

**Languages:**

- HTML5 - page structure and templates
- CSS3 - styling with BEM methodology
- JavaScript ES6 - classes, modules, and event handling

**JavaScript Classes:**

- `Todo` - handles individual todo items
- `Section` - renders lists to the DOM
- `Popup` - opens and closes the modal
- `PopupWithForm` - handles form submission (extends Popup class)
- `TodoCounter` - tracks completion statistics
- `FormValidator` - validates form inputs

**Key Concepts I Used:**

- Class inheritance (PopupWithForm extends Popup)
- Loose coupling with callbacks
- ES6 modules for code organization
- Array methods like `forEach` and `filter`
- Event delegation for dynamic elements

## Deployment

This project is deployed on GitHub Pages:

-## Live Demo
[View Live Project](https://john-beast-engineer.github.io/se_project_todo-app/)
