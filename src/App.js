import React, {Component} from 'react';
import Todos from './components/Todos'
import Header from './components/layout/header'
import AddItem from './components/AddItem'
import './App.css';

class App  extends Component {
  state = {
    todos:[
      {
        id: 1,
        title: 'dinner with boos',
        completed:false
      },
      {
        id: 2,
        title: 'Meeting with boos',
        completed:true
      },
      {
        id: 3,
        title: 'Meeting with client',
        completed:false
      }
    ]
  }
  // check item
  markCompleted = (id)=>{
    this.setState({
      todos: this.state.todos.map((todo)=>{
        if(todo.id===id){
          todo.completed= !todo.completed
        }
        return todo
      })
    })
  }
  //delete item
  deleteItem= (id)=>{
    this.setState({todos: [...this.state.todos.filter((todo)=>todo.id !== id)]})
  }
  render(){
    
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <AddItem/>
        <Todos todos={this.state.todos} markCompleted={this.markCompleted} deleteItem={this.deleteItem}/>
        </div>
      </div>
    );
  }
  
}

export default App;
