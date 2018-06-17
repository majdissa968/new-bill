import React from "react";

class ItemForm extends React.Component {
  fields = {
    description: React.createRef(),
    amount: React.createRef(),
    price: React.createRef()
  };

  handleSubmit = e => {
    e.preventDefault();

    const item = {
      description: this.fields.description.current.value,
      amount: parseInt(this.fields.amount.current.value, 10),
      price: parseFloat(this.fields.price.current.value)
    };

    this.props.addItem(item);
    e.target.reset();
  };

  render() {
    return (
      <div className="item-form">
        <h2>New Item</h2>

        <form className="row" onSubmit={this.handleSubmit}>
          <div className="col-lg-6">
            <input
              className="form-control"
              type="text"
              placeholder="Description"
              ref={this.fields.description}
            />
          </div>
          <div className="col-lg-2">
            <input
              className="form-control"
              type="number"
              placeholder="Amount"
              ref={this.fields.amount}
            />
          </div>
          <div className="col-lg-2">
            <input
              className="form-control"
              type="number"
              placeholder="Price"
              ref={this.fields.price}
            />
          </div>
          <div className="col-lg-2">
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-plus" /> Add item
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ItemForm;
