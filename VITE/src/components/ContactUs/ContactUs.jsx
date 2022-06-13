import React, { useState } from "react";
import { Form, Col, Row, Button, Alert } from "react-bootstrap";
import { http } from "../config/axiosConfig.js";
import swal from "sweetalert2";
import joi from "joi";
import "./contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState();
  const [error, setError] = useState([]);

  const contactForm = joi.object({
    name: joi.string().min(3).max(15).required().label("Name"),
    email: joi
      .string()
      .min(5)
      .max(35)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    message: joi.string().min(5).max(50).required().label("Message"),
    queryType: joi.string().required().label("Query Type"),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof formData === "undefined") {
      setError([{ message: "Please fill the form", path: "empty" }]);
    } else {
      let result = contactForm.validate(formData, { abortEarly: false });
      if (result.error) {
        setError(result.error.details);
      } else {
        http
          .post("contact", formData)
          .then((res) => {
            if (res.status === 201) {
              swal.fire(
                "Message sent Successfully",
                "Thankyou for ContactUs",
                "success"
              );
            }
          })
          .catch((er) => {
            let e = er.response.data.error.errors;
            for (let el in e) {
              setError([{ err: e[el] }]);
            }
          });
      }
    }
  };

  return (
    <div>
      <Form
        className="Form-main"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        {error?.find((er) => er?.path == "empty")?.message && (
          <Alert variant="danger">
            {error?.find((er) => er?.path == "empty")?.message}
          </Alert>
        )}
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control name="name" type="name" placeholder="Enter Name" />
            {error && (
              <Form.Text className="text-danger">
                {error?.find((er) => er?.path[0] == "name")?.message}
              </Form.Text>
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control name="email" type="email" placeholder="Email" />
            {error && (
              <Form.Text className="text-danger">
                {error?.find((er) => er?.path[0] == "email")?.message}
              </Form.Text>
            )}
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Message
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name="message"
              type="textarea"
              placeholder="Write a message"
            />
            {error && (
              <Form.Text className="text-danger">
                {error?.find((er) => er?.path[0] == "message")?.message}
              </Form.Text>
            )}
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Query type
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Hotel Query"
                name="queryType"
                value="Hotel Query"
              />
              <Form.Check
                type="radio"
                label="Rooms Query"
                name="queryType"
                value="Rooms Query"
              />
              <Form.Check
                type="radio"
                label="Restorent Query"
                name="queryType"
                value="Restorent Query"
              />
              {error && (
                <Form.Text className="text-danger">
                  {error?.find((er) => er?.path[0] == "queryType")?.message}
                </Form.Text>
              )}
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" className="btn">
              Send Message
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ContactUs;
