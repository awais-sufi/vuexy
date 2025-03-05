// ** React Imports
import { useSkin } from "@hooks/useSkin";
import { Link } from "react-router-dom";
import logo from "@src/assets/images/logo/Group 10.svg";
// ** Icons Imports

// ** Custom Components
// import InputPasswordToggle from "@components/input-password-toggle";

// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/signup.svg";
import illustrationsDark from "@src/assets/images/pages/signup.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

const Login = () => {
  const { skin } = useSkin();

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Col className=" align-items-center p-5" lg="7" sm="12">
          <div className="offset-1">
            <strong className="ah">Booking Tracking Service</strong>
            <p className="mt-1">
              Effortlessly Monitor Your Shipments with Real-Time Updates
            </p>
          </div>
          <div className="d-none d-lg-flex mt-lg-3 w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex mt-lg-5 align-items-center card rounded-5 auth-bg "
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h1" className="fw-bold text-center mt-3 mb-1">
              <img src={logo} />
            </CardTitle>
            <CardText className="fs-1 fw-bold my-2 text-center">
              Sign Up
            </CardText>
            <hr className="my-2"></hr>
            <Form
              className="auth-login-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div class="row ">
                <div class="col ">
                  <Label className="form-label" for="login-email">
                    First Name
                  </Label>
                  <Input
                    className="rounded-5"
                    type="text"
                    class="form-control"
                    placeholder="John"
                    name="text"
                  />
                </div>
                <div class="col">
                  <Label className="form-label rounded-5" for="login-email">
                    Last Name
                  </Label>
                  <Input
                    className="rounded-5"
                    type="text"
                    class="form-control"
                    placeholder="Doe"
                    name="text"
                  />
                </div>
              </div>
              <div className="my-2">
                <Label className="form-label rounded-5" for="login-email">
                  Email
                </Label>
                <Input
                  className="rounded-5"
                  type="email"
                  id="login-email"
                  placeholder="example@gmail.com"
                  autoFocus
                />
              </div>
              <div className="my-2">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                </div>
                <Input
                  className="input-group-merge rounded-5"
                  placeholder="Enter password"
                  id="login-password"
                />
              </div>
              <hr className="my-3"></hr>
              <Button
                className="rounded-5"
                tag={Link}
                to="/"
                color="primary"
                block
              >
                Sign in
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">Already have an account? </span>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
