import React, { Component } from "react";
import List from "./List";
import "./styles.css";

class Task extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      items: []
    };

    this.handleTask = event => {
      this.setState({
        value: event.target.value
      });
    };

    this.handleAdOpr = event => {
      event.preventDefault();

      if (this.state.value === "") return;

      const newItem = {
        task: this.state.value,
        id: Date.now(),
        status: false
      };

      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        value: ""
      }));
    };

    this.handleMark = itemId => {
      const updatedItems = this.state.items.map(item => {
        if (itemId === item.id) item.status = !item.status;

        return item;
      });

      this.setState({
        items: [].concat(updatedItems)
      });
    };

    this.handleDelete = itemId => {
      const updatedItems = this.state.items.filter(item => {
        return item.id !== itemId;
      });

      this.setState({
        items: [].concat(updatedItems)
      });
    };
  }

  render() {
    return (
      <div>
        <input className="input_style" placeholder="Add New Task" onChange={this.handleTask} value={this.state.value}/>
        <button className="btn_style" onClick={this.handleAdOpr}>Add</button>
        <List items={this.state.items} deleteItem={this.handleDelete} markItemComplete={this.handleMark}/>
      </div>
    );
  }
}

export default Task;
