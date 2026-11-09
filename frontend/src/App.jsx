import { useState } from "react";
import axios from "axios";

function App() {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
          `${import.meta.env.VITE_API_URL}/api/customers`,
          customer
      );

      alert("Customer registered successfully!");

      setCustomer({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      });

    } catch (error) {
      alert("Registration failed!");
      console.error(error);
    }
  };

  return (
      <div style={{ maxWidth: "400px", margin: "50px auto" }}>
        <h2>Customer Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
              name="firstName"
              placeholder="First Name"
              value={customer.firstName}
              onChange={handleChange}
              required
          />

          <br /><br />

          <input
              name="lastName"
              placeholder="Last Name"
              value={customer.lastName}
              onChange={handleChange}
              required
          />

          <br /><br />

          <input
              name="email"
              type="email"
              placeholder="Email"
              value={customer.email}
              onChange={handleChange}
              required
          />

          <br /><br />

          <input
              name="phone"
              placeholder="Phone"
              value={customer.phone}
              onChange={handleChange}
          />

          <br /><br />

          <button type="submit">
            Register
          </button>
        </form>
      </div>
  );
}

export default App;