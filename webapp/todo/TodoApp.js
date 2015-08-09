'use strict';

import {ListItem} from './ListItem';

export class TodoApp extends React.Component{
  constructor(){
    super();
    this.state = {items: [], text: ''};
    // Unlike React.createClass, extending React.Component does not
    // bind 'this' on functions called in another context, for you.
    // You need to bind 'this' on the constructor
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  }
  render() {
    return (
      <div>
      <h3>TODO</h3>
      <ListItem items={this.state.items} />
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.onChange} value={this.state.text} />
      <button>{'Add #' + (this.state.items.length + 1)}</button>
      </form>
      </div>
    );
}

};