import React from "react";

class ItemTotal extends React.Component {
  render() {
    return (
      <div className="clearfix">
        <div className="item-total w-40">$ {this.props.total}</div>
      </div>
    );
  }
}

export default ItemTotal;
