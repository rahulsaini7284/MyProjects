import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { http } from "../config/axiosConfig.js";
import Joi from "joi";
import "./signUp.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const signUpForm = Joi.object({
  name: Joi.string().min(3).max(20).required().label("Name"),
  email: Joi.string()
    .min(4)
    .max(40)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .label("Email"),
  password: Joi.string().min(5).max(20).required(),
});

const SignUp = () => {
  const [formData, setFormData] = useState();
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  console.log(error);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof formData === "undefined") {
      setError([{ message: "Please fill the form", path: "empty" }]);
    } else {
      let result = signUpForm.validate(formData, { abortEarly: false });
      if (result.error) {
        setError(result.error.details);
      } else {
        http
          .post("user", formData)
          .then((res) => {
            if (res.status === 201) {
              Swal.fire(
                "User Created Successfully",
                "Signed In Success",
                "success"
              );
              navigate("/");
            }
          })
          .catch((er) => {
            let e = er.response.data.error.errors;
            console.log(e);
          });
      }
    }
  };

  return (
    <div>
      <Form
        className="form-main"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input"
            name="name"
            type="text"
            placeholder="Enter Name"
          />
          {error && (
            <Form.Text className="text-warning">
              {error?.find((er) => er?.path[0] == "name")?.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="input"
            name="email"
            type="email"
            placeholder="Enter email"
          />
          {error && (
            <Form.Text className="text-warning">
              {error?.find((er) => er?.path[0] == "email")?.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input"
            name="password"
            type="password"
            placeholder="Password"
          />
          {error && (
            <Form.Text className="text-warning">
              {error?.find((er) => er?.path[0] == "password")?.message}
            </Form.Text>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
