import { Form } from "react-router"; // Corrected import
import "./Contact.css";
import { useState } from "react";
import addTableData from "../AXIOS/Post";

export const ContactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = await Object.fromEntries(res);
    const result = await addTableData("users", {
      name: data.name,
      email: data.email,
      message: data.message,
    });
    return { success: true }; // Return success indicator
  } catch (error) {
    console.log(error);
    return { success: false }; // Return failure indicator
  }
};

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const result = await addTableData("users", {
      name: data.name,
      email: data.email,
      message: data.message,
    });
    event.target.reset(); // Clear all form fields after successful submission
    setSubmitted(true); // Set submitted state to true on success
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <>
      <div className="contactMainContainer">
        <Form method="POST" action="/contact" onSubmit={handleSubmit}>
          <div className="nameContainer">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="emailContainer">
            <label htmlFor="email">Your Email</label>
            <input
              type="email" // Changed to email type for validation
              name="email"
              id="email"
              placeholder="xyz@gmail.com"
              required
            />
          </div>
          <div className="messageContainer">
            <label htmlFor="message">YOUR MESSAGE</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </div>
        </Form>
        {submitted && (
          <div className="successMessage">
            Data submitted successfully!
          </div>
        )}
      </div>
    </>
  );
};