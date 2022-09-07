import { Link } from "react-router-dom";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import loginImage from "../../assets/images/login.svg";

export default function Signup() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration img={loginImage} />
        <Form className="login">
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
