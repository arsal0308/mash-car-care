import React from 'react';
import './ContactUsForm.css';
import { Link } from 'react-router-dom';

const ContactUsForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitted');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2 className="hours">Sales and Customer Service Hours:</h2>
        <h3>Monday - Friday 9 am to 5 pm EST</h3>
        <form onSubmit={onSubmit}>
          <div className="customerName">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="customerEmail">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="customerMessage">
            <label className="form-label" htmlFor="message">
              Message:
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
        <Link to = '/' style={{ textDecoration: 'none'}}>   
          <div>
            <button className="btn return">Return to Site</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactUsForm;
