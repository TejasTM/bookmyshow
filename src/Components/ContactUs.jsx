import React from "react";

function ContactUs() {
  return (
    <div className="contactus">
      <footer className="text-center text-white">
        <div className="container p-4">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label">Email address</label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Bookmyshow is an entertainment ticketing platform developed by
              Bigtree Entertainment. Its platform allows users to buy tickets
              for cinemas, theaters, and sports. The company aims to deliver
              entertainment experience to customers. BookMyShow was founded by
              Ashish Hemrajani, Parikshit Dar and Rajesh Balpande, all three
              alumni of Sydenham Institute of Management, Mumbai University.
            </p>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Shows</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Movies
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      BookMyShow
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Streams</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Sports
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Plays
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Buzz
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Activities
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Countries</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Singapore
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      UAE
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Sri Lanka
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Help</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright :
          <a
            className="text-white ms-2"
            target="_blank"
            href="https://bookmyshow.com/"
          >
            BookMyShow.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
