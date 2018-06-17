import React from "react";
import uuid from "uuid/v4";
import CustomerForm from "./CustomerForm";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {},
      items: {
        "abcd-efgh-ijklm": {
          uuid: "abcd-efgh-ijklm",
          description: "Creating a fancy website from PSD to HTML, CSS & JS",
          amount: 1,
          price: 150.0
        },
        "nopq-rstuv-wxy": {
          uuid: "nopq-rstuv-wxy",
          description: "Creating additional page layouts",
          amount: 5,
          price: 30.0
        }
      },
      total: 0
    };

    for (const uuid in this.state.items) {
      const item = this.state.items[uuid];
      this.state.total += item.price * item.amount;
    }
  }

  updateCustomerData = data => {
    this.setState(state => {
      state.customer = data;
      return state;
    });
  };

  addItem = item => {
    item.uuid = uuid();

    this.setState(state => {
      state.items[item.uuid] = item;
      state.total += item.price * item.amount;
      return state;
    });
  };

  saveBill = () => {
    console.log("Save new bill:");
    console.log(this.state);
  };

  render() {
    return (
      <div className="app container">
        <h1>New Bill</h1>

        <div className="row">
          <div className="col-lg-4">
            <CustomerForm updateCustomerData={this.updateCustomerData} />
          </div>
        </div>

        <ItemForm addItem={this.addItem} />
        <ItemList items={this.state.items} />
        <ItemTotal total={this.state.total} />

        <button
          type="button"
          className="btn-save btn btn-success"
          onClick={this.saveBill}
        >
          <i className="fa fa-save" /> Save Bill
        </button>
      </div>
    );
  }
}

export default App;
