import React from "react";
import "../../styles/styles/styles.css";
export default function AboutMe() {
  return (
    <div>
      <div className="main">
        <div>
          <img className="profile-photo" />
          <p>
            <i className="bi bi-geo-alt"></i>North Bethesda, Maryland
          </p>
          <p>
            <i className="bi bi-envelope"></i>{" "}
            <a className="link" href="mailto:carnett.caleb@gmail.com">
              Carnett.caleb@gmail.com
            </a>
          </p>
          <p>
            <i className="bi bi-linkedin"></i>{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/calebcarnett/"
            >
              in/calebcarnett
            </a>
          </p>
        </div>
        <section className="about-section">
          <h2 className="description">Hello, I'm Caleb</h2>
          <hr></hr>
          <div>
            <p>Full Stack Developer</p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              velit, lobortis ut magna varius, blandit rhoncus sem. Morbi
              lacinia nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut
              feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut
              aliquet urna imperdiet ac. Sed nec nulla aliquam, bibendum odio
              eget, vestibulum tortor. Cras rutrum ligula in tincidunt commodo.
              Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
              elit. Donec blandit est sed risus feugiat porttitor. Vestibulum
              molestie hendrerit massa non consequat. Vestibulum vitae lorem
              tortor. In elementum ultricies tempus. Interdum et malesuada fames
              ac ante ipsum primis in faucibus.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

{
  /* <div className="homeanimation"> </div>
      <div className="mountain"></div>
      <div className="cloud"></div>
      <div className="cloud2"></div> */
}
