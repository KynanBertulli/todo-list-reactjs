import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
/*
To Do List MVC
1. add todo
2. display todo
3. cross off todos
4. show number of active todos
5. filter all/active/complete
6. delete todo
7. delete all complete
    7.1 only show if atleast one is complete
8. button to toggle on/off 

*/

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true,
  };
  addTodo = (todo) => {
    // const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        // loops to suppose update
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };
  onDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  removeAllTodoThatAreComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };
  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.onDelete(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <button onClick={() => this.updateTodoToShow("all")}> all</button>
        <button onClick={() => this.updateTodoToShow("active")}>active</button>
        <button onClick={() => this.updateTodoToShow("complete")}>
          complete
        </button>
        {this.state.todos.some((todo) => todo.complete) ? (
          <button onClick={() => this.removeAllTodoThatAreComplete()}>
            remove all complete todos
          </button>
        ) : null}
        <div>
          <button
            onClick={() =>
              this.setState({
                todos: this.state.todos.map((todo) => ({
                  ...todo,
                  complete: this.state.toggleAllComplete,
                })),
                toggleAllComplete: !this.state.toggleAllComplete,
              })
            }
          >
            toggle all complete : {`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}
