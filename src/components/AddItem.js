import React, { Component } from 'react';

class AddItem extends Component {
    state = {  }
    render() {
        return (
            <form style={{display: 'flex'}}>
               <input type="text" name="title" style={{padding:'5px 10px',flex:'1'}}/>
               <input type="submit" className="btn" value="Add Item" placeholder="add to list"/>
            </form>
            
        );
    }
}

export default AddItem;