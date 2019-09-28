import React, {Component} from 'react';
import uuid from 'uuid';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from './components/Todos'
import Header from './components/layout/header'
import AddItem from './components/AddItem'
import About from './components/pages/About'
import './App.css';
import axios from 'axios';

class App  extends Component {
  state = {
    todos:[ 
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      }
    ]
  }
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //   .then(res=>this.setState({todos: res.data}))
  // }
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
  //addItem
  addTodo = (title)=>{
    const  newTodo ={
      id: uuid.v4(),
      title: title,
      completed:false,
    }
    this.setState({todos: [...this.state.todos,newTodo] })
  }
  render(){
    
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header/>
        <Route exact path="/" render={props =>(
          <React.Fragment>
             <AddItem addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markCompleted={this.markCompleted} deleteItem={this.deleteItem}/>
          </React.Fragment>
        )}/>
        <Route path="/about" component={About} />
       
        </div>
      </div>
      </Router>
    );
  }
  
}

export default App;
