class Todo {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
  }
  _getTemplate() {
    const todoElement = document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);

    return todoElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".todo__delete-btn")
      .addEventListener("click", () => {
        this._handleDeleteClick();
      });

    this._element
      .querySelector(".todo__completed")
      .addEventListener("change", () => {
        this._handleCheckboxChange();
      });
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  _handleCheckboxChange() {
    this._data.completed = !this._data.completed;
    console.log(`Todo "${this._data.name}" completed: ${this._data.completed}`);
  }

  getView() {
    this._element = this._getTemplate();
    const todoNameEl = this._element.querySelector(".todo__name");
    const todoCheckboxEl = this._element.querySelector(".todo__completed");
    const todoLabel = this._element.querySelector(".todo__label");
    const todoDate = this._element.querySelector(".todo__date");
    const todoDeleteBtn = this._element.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;
    todoCheckboxEl.checked = this._data.completed;

    // Apply id and for attributes.
    // The id will initially be undefined for new todos.
    todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabel.setAttribute("for", `todo-${this._data.id}`);

    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._setEventListeners();

    return this._element;
  }
}

export default Todo;
