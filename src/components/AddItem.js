import React, { Component } from 'react';

class AddItem extends Component {
    state = { 
        title: '',
     }
     onChange = (e)=>{
         this.setState({
             [e.target.name] :e.target.value
            })
     }
     onSubmit = (e)=>{
         e.preventDefault();
         this.props.addTodo(this.state.title);
         this.setState({title: ''})
     }
    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
               <input
                type="text"
                 name="title"
                 value={this.state.title}
                 placeholder="add to list"
                 onChange={this.onChange}
                style={{padding:'5px 10px',flex:'1'}}/>
               <input type="submit" value="submit"  className="btn" />
            </form>
            
        );
    }
}

export default AddItem;