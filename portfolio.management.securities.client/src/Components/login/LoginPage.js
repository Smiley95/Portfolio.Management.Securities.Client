import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import * as authActions from "../../redux/actions/authenticationActions";
//import { Button } from "react-bootstrap";
import {
  Button,
  Form,
  Label,
  Card,
  CardBody,
  CardFooter,
  FormGroup,
  Input,
  CardTitle,
} from "reactstrap";
import "./login.css";

const LoginPage = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userMail, setUserMail] = useState("email");
  const [password, setPassword] = useState("password");
  function onChange(event) {
    const { name, value } = event.target;
    if (name === "mail") {
      setUserMail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  }
  function validateInputs(mail, password) {
    if (mail.length < 1) {
    }
  }
  function onSubmit() {}
  return (
    <center>
      <div className="container login-container">
        <div className="d-flex justify-content-center h-100">
          <Card>
            <CardBody>
              <CardTitle>Sign In</CardTitle>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label
                    htmlFor="formEmail"
                    className="grey-text font-weight-light"
                  >
                    Your email
                  </Label>
                  <br />
                  <div class="input-group-prepend" id="formEmail">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <Input
                    type="email"
                    class="form-control"
                    name="mail"
                    className="form-control"
                    value={userMail}
                    onChange={onChange}
                    placeholder="username"
                  />
                </FormGroup>
                <FormGroup>
                  <Label
                    htmlFor="formPassword"
                    className="grey-text font-weight-light"
                  >
                    Your password
                  </Label>
                  <br />

                  <div class="input-group-prepend" id="formPassword">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <Input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="password"
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    bsSize="large"
                    type="submit"
                    color="danger"
                    className="btn float-right login-btn"
                  >
                    Login
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <div class="d-flex justify-content-center links">
                Faced issues?<a href="#">Contact Us</a>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </center>
  );
};
export default LoginPage;
