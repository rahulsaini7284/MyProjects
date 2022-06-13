import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { http } from "../config/axiosConfig";
import joi from "joi";
import swal from "sweetalert2";
import "./roomForm.css";

const RoomDataForm = joi.object({
  roomType: joi.string().required(),
  status: joi.boolean().required(),
  rating: joi.number().required().min(1).max(5),
  price: joi.number().required().min(1000).max(20000),
  images: joi.required(),
});

const RoomForm = () => {
  const [formData, setFormData] = useState();
  const [error, setError] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    let data = new FormData(e.target);
    e.preventDefault();
    // http
    //   .post("roomData", data)
    //   .then((res) => console.log(res))
    //   .catch((er) => console.log(er.message));
    if (typeof formData === "undefined") {
      setError({ message: "please Fill The Form", path: "empty" });
    } else {
      let result = RoomDataForm.validate(formData, { abortEarly: false });
      if (result.error) {
        setError(result.error);
      } else {
        http
          .post("roomData", data)
          .then((res) => {
            if (res.status === 201) {
              swal.fire(
                "Room Data Upload Successfull",
                "Data Saved",
                "success"
              );
            }
          })
          .catch((er) => {
            console.log(er);
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
        className="form-Main"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Room Type</Form.Label>
          <Form.Control name="roomType" type="text" placeholder="Room Type" />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Is Available
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Available"
              name="status"
              value={true}
            />
            <Form.Check
              type="radio"
              label="Booked"
              name="status"
              value={false}
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Rating</Form.Label>
          <Form.Control name="rating" type="number" placeholder="Rating" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="number" placeholder="Enter Price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="images"
            type="file"
            multiple
            placeholder="Choose an images"
          />
        </Form.Group>
        <Button variant="primary" type="Submit">
          Add Room Data
        </Button>
      </Form>
    </div>
  );
};

export default RoomForm;
