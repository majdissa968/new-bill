import React from "react";

class Item extends React.Component {
  render() {
    const item = this.props.data;

    return (
      <tr>
        <td>{item.description}</td>
        <td className="text-right">{item.amount}</td>
        <td className="text-right">$ {item.price}</td>
        <td className="text-right">$ {item.price * item.amount}</td>
      </tr>
    );
  }
}

export default Item;
