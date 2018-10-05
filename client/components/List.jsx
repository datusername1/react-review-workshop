import React, {Component} from 'react';
import ListEntry from './listEntry.jsx';

class List extends Component {
  constructor (props) {
    super (props);
    this.state = {
      item: '',
      items: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  };

  onChangeHandler (e) {
    this.setState ({
      [e.target.name]: e.target.value
    });
  };

  onSubmitHandler () {
    this.setState ({
      item: [...this.state.items, this.state.item]
    });
  };

  render () {
    return (
      <div>
        Item: <input name='item' onChange={this.onChangeHander} />
        <button onClick={this.onSubmitHandler}>Submit</button>
        <div>
          {this.state.item.map(item => (
            <ListEntry item={item} key={item} />
          ))};
        </div>
      </div>
    )
  }
  
};


export default List;