import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Form } from "reactstrap";
import { imageUpload } from "../../../store/actions/authAction";
import Header from "../header";
import Footer from "../footer";
import "./module.profile.css";

class Profile extends Component {
  state = {
    profilePic: "",
  };

  imageHandler = (e) => {
    this.setState({
      profilePic: e.target.files[0],
    });
  };

  submitImage = (e) => {
    console.log(e);
    e.preventDefault();
    const { profilePic } = this.state;
    const formData = new FormData();
    formData.append("file", profilePic);
    const pram = this.props.user._id;
    this.props.imageUpload(pram, formData);
  };

  render() {
    const { user, auth } = this.props;
    return (
      <>
        {!auth.isAuthenticated && <Redirect to="/login" />}
        <Header />
        <div className="container emp-profile">
          <Form action="" onSubmit={this.submitImage}>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.image}
                      className="img-fluid"
                    />
                  ) : (
                    <img
                      src="../uploads/default.png"
                      alt="default"
                      className="img-fluid"
                    />
                  )}
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input
                      type="file"
                      name="profilePic"
                      onChange={this.imageHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="profile-head">
                  <h5>{user.name}</h5>
                  <h6>Web Developer and Designer</h6>
                  <p className="proile-rating">
                    RANKINGS : <span>8/10</span>
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <Button type="submit">Image Upload</Button>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>WORK LINK</p>
                  <a href="">Website Link</a>
                  <br />
                  <a href="">Bootsnipp Profile</a>
                  <br />
                  <a href="">Bootply Profile</a>
                  <p>SKILLS</p>
                  <a href="">Web Designer</a>
                  <br />
                  <a href="">Web Developer</a>
                  <br />
                  <a href="">WordPress</a>
                  <br />
                  <a href="">WooCommerce</a>
                  <br />
                  <a href="">PHP, .Net</a>
                  <br />
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user._id}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.name}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.email}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>User Type</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.role}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div className="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  auth: state.auth,
});
export default connect(mapStateToProps, { imageUpload })(Profile);
