import React, { Fragment } from "react";

class CustomerForm extends React.Component {
  fields = {
    name: React.createRef(),
    address: React.createRef(),
    zipcode: React.createRef(),
    city: React.createRef()
  };

  handleChange = e => {
    const customer = {
      name: this.fields.name.current.value,
      address: this.fields.address.current.value,
      zipcode: this.fields.zipcode.current.value,
      city: this.fields.city.current.value
    };

    this.props.updateCustomerData(customer);
  };

  render() {
    return (
      <Fragment>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
            ref={this.fields.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            ref={this.fields.address}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group row">
          <div className="col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Zipcode"
              ref={this.fields.zipcode}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-lg-8">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              ref={this.fields.city}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CustomerForm;
