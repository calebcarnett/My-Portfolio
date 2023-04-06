import React from "react";
import "../../styles/styles/styles.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xayzpyor");
  if (state.succeeded) {
    return (
      <div className="thanks">
        <h1>
          Thank you for reaching out!<br></br>To go back to the home page click{" "}
          <a href="/home">Me</a>
        </h1>
        ;
      </div>
    );
  }

  return (
    <section className="d-flex align-items-center flex-column ">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact Me
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact me
        directly.
      </p>

      <div className="row m-3">
        <div className="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            className="contact-form"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="name" className="">
                    Your name
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="name"
                    placeholder="name"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="email" class="">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    // onblur={onblur()}
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <label htmlFor="subject" className="">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="subject"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    placeholder="leave a message"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>
            <button
              className="btn btn-outline-dark btn-floating m-1"
              type="submit"
              disabled={state.submitting}
            >
              Send<i className="bi bi-send"></i>
            </button>
          </form>

          <div className="text-center text-md-left"></div>
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
}

export default Contact;
