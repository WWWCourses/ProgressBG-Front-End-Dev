import React, {Component} from 'react'
import './TODOS'

class TODOS extends Component{
  render(){
    return (
      <div className="header">
        <h1>List of TODOS</h1>
        <form onSubmit={this.props.addItem}>
          <input type="text" placeholder="title..."/>

          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default TODOS


