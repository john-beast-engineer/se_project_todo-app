import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.querySelector("#add-todo-popup .popup__form");

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", {
    handleCheck: () => {
      const isCompleted = todo.completed;
      todoCounter.updateCompleted(isCompleted);
    },
    handleDelete: () => {
      const wasCompleted = todo.completed;
      if (wasCompleted) {
        todoCounter.updateCompleted(false);
      }
      todoCounter.updateTotal(false);
    },
  });
  return todo.getView();
};

const todoSection = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todoElement = generateTodo(item);
    todoSection.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (formData) => {
    const date = new Date(formData.date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const todoData = { name: formData.name, date, id };

    const todoElement = generateTodo(todoData);
    todoSection.addItem(todoElement);

    todoCounter.updateTotal(true);

    addTodoPopup.close();
    formValidator.resetValidation();
  },
});

addTodoPopup.setEventListeners();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

todoSection.renderItems();
