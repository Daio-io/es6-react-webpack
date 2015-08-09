'use strict';

export class ListItem extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }

};