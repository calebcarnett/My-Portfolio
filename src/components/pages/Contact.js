import React, { useState } from "react";
import "../../styles/styles/styles.css";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/Helper";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
  };

  return (
    <section className="d-flex align-items-center flex-column ">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact Me
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact me
        directly.
      </p>

      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            className="contact-form"
            onChange={handleInputChange}
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label for="name" className="">
                    Your name
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    className="form-control"
                  />
                  <label for="email" class="">
                    Email
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                  <label for="subject" className="">
                    Subject
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                  <label for="message">Message</label>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <a
              className="btn btn-outline-dark btn-floating m-1"
              onclick="document.getElementById('contact-form').submit();"
            >
              Send<i class="bi bi-send"></i>
            </a>
          </div>
          <div className="status"></div>
        </div>

        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="bi bi-geo-alt"></i>
              <p>North Bethesda, Maryland</p>
            </li>

            <li>
              <i className="bi bi-telephone-forward"></i>
              <p>830-312-8326</p>
            </li>

            <li>
              <i className="bi bi-envelope-at"></i>
              <p>carnett.caleb@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
  // <div>
  //   <p>Hello {userName}</p>
  //   <form className="form">
  //     <input
  //       value={email}
  //       name="email"
  //       onChange={handleInputChange}
  //       type="email"
  //       placeholder="email"
  //     />
  //     <input
  //       value={userName}
  //       name="userName"
  //       onChange={handleInputChange}
  //       type="text"
  //       placeholder="username"
  //     />
  //     <button type="button" onClick={handleFormSubmit}>
  //       Submit
  //     </button>
  //   </form>
  //   {errorMessage && (
  //     <div>
  //       <p className="error-text">{errorMessage}</p>
  //     </div>
  //   )}
  // </div>
  // );
}

export default Contact;
