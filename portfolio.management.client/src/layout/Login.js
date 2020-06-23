import loginLogo from "../img/LinedataLogo.png";
import LDSside from "../img/loginBack.jpg";
import PropTypes from "prop-types";
import React from "react";
import Content from "./Content";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

const loginBackground = {
  "background-image": `url("${LDSside}")`,
  "background-repeat": "no-repeat",
  "background-size": "cover",
};

class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const {
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      onLogoClick,
    } = this.props;

    return (
      <main className="cr-app bg-light" style={loginBackground}>
        <Content fluid>
          <Row
            style={{
              "justify-content": "flex-end",
              height: "100vh",
              "align-items": "center",
            }}
          >
            <Col md={4} lg={4} sm={9} style={{ "margin-right": "20%" }}>
              <Card>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <div className="text-center pb-4">
                      <img
                        src={loginLogo}
                        className="rounded"
                        style={{ height: 60 }}
                        alt="logo"
                        onClick={onLogoClick}
                      />
                    </div>
                    <FormGroup>
                      <Label for={usernameLabel}>{usernameLabel}</Label>
                      <Input {...usernameInputProps} />
                    </FormGroup>
                    <FormGroup>
                      <Label for={passwordLabel}>{passwordLabel}</Label>
                      <Input {...passwordInputProps} />
                    </FormGroup>
                    <hr />
                    <Button
                      size="lg"
                      className="bg-gradient-theme-left border-0"
                      block
                      onClick={this.handleSubmit}
                    >
                      Login
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Content>
      </main>
    );
  }
}

export const STATE_LOGIN = "LOGIN";

Login.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN]).isRequired,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

Login.defaultProps = {
  authState: "LOGIN",
  usernameLabel: "Email",
  usernameInputProps: {
    type: "email",
    placeholder: "your@email.com",
  },
  passwordLabel: "Password",
  passwordInputProps: {
    type: "password",
    placeholder: "your password",
  },
  onLogoClick: () => {},
};

export default Login;
