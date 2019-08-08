import React, { Component } from 'react';
import './styles.css';

class Item extends Component {
    
    constructor(){
        super();
        
        this.onMark=(event)=>{
            this.props.markItemComplete(this.props.id)
        }
        
        this.onDelete=(event)=>{
            this.props.deleteItem(this.props.id)
        }  
    }  
    render() {
        const itc = "isItemCompleted-" + (this.props.status ? "done" : "undone");
     
    return (
        <div>
        <div className="item">
        
        <input type="checkbox" className="chs" onChange={this.onMark} />
        <button className="itemButton" onClick={this.onDelete}>Delete</button>
        <span className={itc}> {this.props.task} </span> 
        
        
        </div>
        </div>
    );
  }   
}

export default Item;