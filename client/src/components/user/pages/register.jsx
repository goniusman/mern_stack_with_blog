import React, { Component } from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../../store/actions/authAction";

export class Register extends Component {
  state = {
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    error: {},
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.auth.error,
      };
    }
    return null;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, role, password, confirmPassword, error } = this.state;
    this.props.register(
      { name, email, role, password, confirmPassword, error },
      this.props.history
    );
  };

  render() {
    const { name, email, password, confirmPassword, error } = this.state;
    const { auth } = this.props;
    return (
      <div className="main">
        <div
          className="c-app flex-row align-items-center mb-5"
          style={{ marginTop: "95px" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                {auth.isAuthenticated && <Redirect to="/" />}
                {
                  <div className="card mx-4">
                    <div className="card-body p-4">
                      <h1>Register</h1>

                      <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                          <Label>Name</Label>
                          <Input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Type Name"
                            onChange={this.handleChange}
                            className={
                              error.name
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                          />
                          {error.name && (
                            <div className="invalid-feedback">{error.name}</div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Type Email"
                            onChange={this.handleChange}
                            className={
                              error.email
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                          />
                          {error.email && (
                            <div className="invalid-feedback">
                              {error.email}
                            </div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Label for="role">Type</Label>
                          <Input
                            type="select"
                            name="role"
                            id="role"
                            onChange={this.handleChange}
                            className={
                              error.role
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                            multiple
                          >
                            <option value="default">Select Type</option>
                            <option value="billing">Billing</option>
                            <option value="instance">Instance</option>
                            <option value="network">Network</option>
                          </Input>

                          {error.role && (
                            <div className="invalid-feedback">{error.role}</div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Label>Password</Label>
                          <Input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Type password"
                            onChange={this.handleChange}
                            className={
                              error.password
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                          />
                          {error.password && (
                            <div className="invalid-feedback">
                              {error.password}
                            </div>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Label>Confirm Password</Label>
                          <Input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Type Confirm Password"
                            onChange={this.handleChange}
                            className={
                              error.confirmPassword
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                          />
                          {error.confirmPassword && (
                            <div className="invalid-feedback">
                              {error.confirmPassword}
                            </div>
                          )}
                        </FormGroup>

                        <Button
                          className="btn btn-block btn-success"
                          type="submit"
                        >
                          Create Account
                        </Button>
                      </Form>
                    </div>
                    <div className="card-body p-4">
                      <span>Already User</span>{" "}
                      <Link to="/login">
                        <button className="btn btn-success"> Login </button>
                      </Link>
                    </div>
                    <div className="card-footer p-4">
                      <div className="row">
                        <div className="col-6">
                          <button
                            className="btn btn-block btn-facebook"
                            type="button"
                          >
                            <span>facebook</span>
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            className="btn btn-block btn-twitter"
                            type="button"
                          >
                            <span>twitter</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { register })(Register);

// export default Register
