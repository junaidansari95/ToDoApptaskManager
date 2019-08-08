import React from 'react';
import Item from './Item';
import './styles.css';

class TodoList extends React.Component {

    render() {
    return (  
        <div>
        {this.props.items.map(item => (
        <Item id={item.id} status={item.status} task={item.task} deleteItem={this.props.deleteItem} markItemComplete={this.props.markItemComplete} />
        ))} 
    </div>
        
    );
  } 
}

export default TodoList;

