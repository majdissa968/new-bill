import React, { Fragment } from "react";
import Item from "./Item";

class ItemList extends React.Component {
  render() {
    return (
      <Fragment>
        <h2>Products &amp; Services</h2>

        <table className="table table-hover table-items">
          <thead>
            <tr>
              <th scope="col" className="w-40">
                Description
              </th>
              <th scope="col" className="w-20 text-right">
                Amount
              </th>
              <th scope="col" className="w-20 text-right">
                Price
              </th>
              <th scope="col" className="w-20 text-right">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.items).map(uuid => (
              <Item data={this.props.items[uuid]} key={uuid} />
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default ItemList;
