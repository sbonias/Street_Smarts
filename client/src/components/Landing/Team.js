import React from 'react';
import '../../App.css';

function Team() {
  return (
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">
              {/* Lorem ipsum dolor sit amet consectetur. */}
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="team-member">
              {/* <img
                className="mx-auto rounded-circle"
                src="img/team/1.jpg"
                alt=""
              /> */}
              <h4>Ffej Caplan</h4>
              <p className="text-muted">Full Stack Developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-github fa-lg"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-book"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="team-member">
              {/* <img
                className="mx-auto rounded-circle"
                src="img/team/2.jpg"
                alt=""
              /> */}
              <h4>Sam Bonias</h4>
              <p className="text-muted">Full Stack Developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/sam-bonias/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/sbonias/">
                    <i className="fa fa-github fa-lg"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://sbonias.github.io/react-portfolio/">
                    <i className="fa fa-book"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
              corporis ea, alias ut unde. */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
