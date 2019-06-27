import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email Id: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
