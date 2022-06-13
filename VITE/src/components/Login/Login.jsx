import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import swal from "sweetalert2";
import { http } from "../config/axiosConfig.js";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import joi from "joi";
import "./login.css";

const loginForm = joi.object({
  email: joi
    .string()
    .min(4)
    .max(40)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .label("Email"),
  password: joi.string().min(5).max(20).required().label("Password"),
});

const Login = () => {
  const [formData, setFormData] = useState();
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = loginForm.validate(formData, { abortEarly: false });
    if (typeof formData === "undefined") {
      setError([{ message: "Please Fil form", path: "empty" }]);
    } else {
      if (result.error) {
        setError(result.error.details);
      } else {
        http
          .post("auth", formData)
          .then((res) => {
            if (res.status === 200) {
              setError([]);
              localStorage.setItem("token", res.data.token);
              swal.fire("Login Success", "User Logedin", "success");
              navigate("/dashboard");
            }
          })
          .catch((er) => {
            setError([{ message: er.response.data, path: "ServerError" }]);
            // for (let el in e) {
            //   setError([{ err: e[el] }]);
            // }
          });
      }
    }
  };

  return (
    <div>
      <Form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="form-main"
      >
        {error?.find((er) => er.path == "empty")?.message && (
          <Alert variant="danger">
            {error?.find((er) => er.path === "empty")?.message}
          </Alert>
        )}
        {error?.find((er) => er.path === "ServerError")?.message && (
          <Alert variant="danger">
            {error?.find((er) => er.path === "ServerError")?.message}
          </Alert>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter user name"
          />
          {error?.find((er) => er.path[0] === "email")?.message && (
            <Form.Text className="text-danger">
              {error?.find((er) => er.path[0] === "email")?.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
          {error?.find((er) => er.path[0] === "password")?.message && (
            <Form.Text className="text-danger">
              {error?.find((er) => er.path[0] === "password")?.message}
            </Form.Text>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <NavLink to={"/signUp"}>
          <Button
            variant="primary"
            type="button"
            style={{ marginLeft: "2rem" }}
          >
            SignUp
          </Button>
        </NavLink>
      </Form>
    </div>
  );
};

export default Login;
