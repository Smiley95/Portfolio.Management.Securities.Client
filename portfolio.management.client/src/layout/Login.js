import loginLogo from "../img/LinedataLogo.png";
import LDSside from "../img/loginBack.jpg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
import { UserActions } from "../redux/actions/UserActions";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const loginBackground = {
  "background-image": `url("${LDSside}")`,
  "background-repeat": "no-repeat",
  "background-size": "cover",
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.props.logout();
    this.state = {
      userMail: "",
      password: "",
      token: "",
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { userMail, password } = this.state;
    if (userMail && password) {
      this.props.login(userMail, password);
    }
  };

  render() {
    const { loggingIn } = this.props;
    const { userMail, password, submitted } = this.state;
    const { onLogoClick } = this.props;
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
                      <Label for="userMail">{"Email"}</Label>
                      <Input
                        type="email"
                        name="userMail"
                        required
                        className="form-control"
                        onChange={this.handleChange}
                        placeholder="email@domain.com"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">{"Password"}</Label>
                      <Input
                        type="password"
                        name="password"
                        required
                        onChange={this.handleChange}
                        placeholder="password"
                      />
                    </FormGroup>
                    <hr />
                    <Button size="lg" className="border-0" block>
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
  onLogoClick: PropTypes.func,
};

function mapStateToProps(state, ownProps) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}
const actionCreators = {
  login: UserActions.login,
  logout: UserActions.logout,
};
export default connect(mapStateToProps, actionCreators)(Login);
