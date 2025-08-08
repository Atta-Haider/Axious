import { Form } from "react-router";
import "./Contact.css";
export const ContactData = async ({request}) =>{
    try {
        const res = await request.formData();
        const data = await Object.fromEntries(res);
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }   
}
export const Contact = () => {
  return (
    <>
      <div className="contactMainContainer">
        <Form method="POST" action="/contact">
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
              type="text"
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
            <button type="submit">Sumbit</button>
          </div>
        </Form>
      </div>
    </>
  );
};
