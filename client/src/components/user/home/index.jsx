import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const Home = () => {
  return (
    <>
      <Header />
      <section id="hero">
        <div className="hero-container">
          <h3>
            Welcome to <strong>Tempo</strong>
          </h3>
          <h1>We're Creative Agency</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <Link To="#about" className="btn-get-started scrollto">
            Get Started
          </Link>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <h3>
                Learn More <span>About Us</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row content">
              <div className="col-lg-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <Link To="#" className="btn-learn-more">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <h3>
                We do offer awesome <span>Services</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4 className="title">
                    <Link To="">Lorem Ipsum</Link>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">
                    <Link To="">Sed ut perspiciatis</Link>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4 className="title">
                    <Link To="">Magni Dolores</Link>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-world"></i>
                  </div>
                  <h4 className="title">
                    <Link To="">Nemo Enim</Link>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-6 col-6">
                <div className="icon-box">
                  <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                  <h3>
                    <Link To="">Lorem Ipsum</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="icon-box">
                  <i
                    className="ri-bar-chart-box-line"
                    style={{ color: "#5578ff" }}
                  ></i>
                  <h3>
                    <Link To="">Dolor Sitema</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-calendar-todo-line"
                    style={{ color: "#e80368" }}
                  ></i>
                  <h3>
                    <Link To="">Sed perspiciatis</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i
                    className="ri-paint-brush-line"
                    style={{ color: " #e361ff" }}
                  ></i>
                  <h3>
                    <Link To="">Magni Dolores</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-database-2-line"
                    style={{ color: "#47aeff" }}
                  ></i>
                  <h3>
                    <Link To="">Nemo Enim</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-gradienter-line"
                    style={{ color: "#ffa76e" }}
                  ></i>
                  <h3>
                    <Link To="">Eiusmod Tempor</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-file-list-3-line"
                    style={{ color: " #11dbcf" }}
                  ></i>
                  <h3>
                    <Link To="">Midela Teren</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-price-tag-2-line"
                    style={{ color: "#4233ff" }}
                  ></i>
                  <h3>
                    <Link To="">Pira Neve</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-anchor-line"
                    style={{ color: "#b2904f" }}
                  ></i>
                  <h3>
                    <Link To="">Dirada Pack</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mt-4">
                <div className="icon-box">
                  <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
                  <h3>
                    <Link To="">Moton Ideal</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-base-station-line"
                    style={{ color: "#ff5828" }}
                  ></i>
                  <h3>
                    <Link To="">Verdo Park</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-fingerprint-line"
                    style={{ color: "#29cc61" }}
                  ></i>
                  <h3>
                    <Link To="">Flavor Nivelanda</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta">
          <div className="container">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <Link className="cta-btn" To="#">
                Call To Action
              </Link>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <h3>
                Check our <span>Portfolio</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container"
              style={{ position: "relative", height: "890.97px" }}
            >
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-app"
                style={{ position: "absolute", left: "0px", top: "0px" }}
              >
                <img
                  src="assets/img/portfolio/portfolio-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <Link
                    To="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    To="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web"
                style={{ position: "absolute", left: "379.99px", top: "0px" }}
              >
                <img
                  src="assets/img/portfolio/portfolio-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <Link
                    To="assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Web 3"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    To="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title">
              <h2>F.A.Q</h2>
              <h3>
                Frequently Asked <span>Questions</span>
              </h3>
            </div>

            <ul className="faq-list">
              <li>
                <div
                  data-bs-toggle="collapse"
                  className="collapsed question"
                  To="#faq1"
                >
                  Non consectetur a erat nam at lectus urna duis?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  To="#faq2"
                  className="collapsed question"
                >
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  To="#faq3"
                  className="collapsed question"
                >
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  To="#faq4"
                  className="collapsed question"
                >
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  To="#faq5"
                  className="collapsed question"
                >
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  To="#faq6"
                  className="collapsed question"
                >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Mauris vitae ultricies leo integer malesuada nunc vel.
                    Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                    eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                    eu scelerisque. Pellentesque diam volutpat commodo sed
                    egestas egestas fringilla phasellus faucibus. Nibh tellus
                    molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container">
            <div className="section-title">
              <h2>Team</h2>
              <h3>
                Our Hardworking <span>Team</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <Link To="">
                        <i className="bi bi-twitter"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-facebook"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-instagram"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <Link To="">
                        <i className="bi bi-twitter"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-facebook"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-instagram"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <Link To="">
                        <i className="bi bi-twitter"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-facebook"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-instagram"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <Link To="">
                        <i className="bi bi-twitter"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-facebook"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-instagram"></i>
                      </Link>
                      <Link To="">
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <h3>
                Contact <span>Us</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div>
              <iframe
                title="k"
                style={{ border: "0", width: "100%", height: "270px" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form action="" method="post" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
