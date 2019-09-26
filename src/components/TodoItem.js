import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    
    getStyle = ()=>{
        return{
            background: '#eee',
            padding: '8px',
            borderBottom: '1px solid #fff',
           textDecoration: this.props.todo.completed?'line-through':'none' 
        }
    }
    render() {
        return (
            <div>
             <input type="checkbox" onChange={this.props.markCompleted.bind(this,this.props.todo.id)}/>
             <p style={this.getStyle()}>{ this.props.todo.title }</p>
             <p>{ this.props.todo.completed }</p>
             <button style={btnStyle} onClick={this.props.deleteItem.bind(this,this.props.todo.id)}>*</button>
            </div>
        );
    }
}
TodoItem.propTypes ={
    todo: PropTypes.object.isRequired
  }
  const btnStyle = {
      backgroundColor: 'red',
      width: '15px',
      height: '15px',
      borderRadius: '30%',
      padding: '5px 10px',
  }
export default TodoItem;