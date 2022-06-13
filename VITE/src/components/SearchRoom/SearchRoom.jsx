import React, { useState, useEffect } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import "./room.css";
import { httpFile, http, httpGet } from "../config/axiosConfig.js";

const SearchRoom = () => {
  let ID = useParams().id;
  console.log("ID", ID);
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    adults: "",
    child: "",
    totalRoom: "",
  });
  console.log(formData);
  const { adults, child, totalRoom } = formData;
  const [MODE, setMODE] = useState("CREATE");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  let startDate = state[0].startDate
    .toString()
    .split(" ")
    .slice(0, 4)
    .join(" ");
  let endDate = state[0].endDate.toString().split(" ").slice(0, 4).join(" ");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePostData = (e) => {
    e.preventDefault();
    let d = new FormData(e.target);
    let data = {
      startDate,
      endDate,
      d,
    };
    if (MODE === "CREATE") {
      let result = http
        .post("room", data)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire("Room Book Successfull", "Booked", "success");
          }
        })
        .catch((er) => console.log(er.messsage));
      console.log(data);
    } else {
      let Data = {
        startDate,
        endDate,
        adults: formData.adults,
        child: formData.child,
        totalRoom: formData.totalRoom,
      };
      let result = http
        .put(`room/${ID}`, Data)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Room Booking Updated", "Update Success", "success");
          }
        })
        .catch((er) => console.log(er.message));
    }
  };
  // useEffect(() => {
  //   httpGet("room")
  //     .then((res) => console.log(res.data.result))
  //     .catch((er) => console.log(er.message));
  // }, []);
  useEffect(() => {
    httpGet(`room/${ID}`)
      .then((res) => {
        setFormData(res.data);
        setMODE("UPDATE");
      })
      .catch((er) => console.log(er.message));
    httpGet(`roomData`)
      .then((res) => console.log(res.data))
      .catch((er) => console.log(er.message));
  }, []);

  return (
    <div className="container-main">
      <div className="div-1">
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          // showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          // months={2}
          ranges={state}
          direction="horizontal"
        />
      </div>
      <div>
        <Form onChange={handleChange} onSubmit={handlePostData}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Total Adults</Form.Label>
            <Form.Control
              type="number"
              name="adults"
              placeholder="Total Adults"
              value={formData?.adults}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Total Childs</Form.Label>
            <Form.Control
              type="number"
              name="child"
              value={formData?.child}
              placeholder="Total Childs"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Total Rooms</Form.Label>
            <Form.Control
              type="number"
              name="totalRoom"
              value={formData?.totalRoom}
              placeholder="Total Rooms"
            />
          </Form.Group>
          <Button className="btn" type="submit">
            {MODE === "CREATE" ? "BOOK YOUR ROOM NOW" : "UPDATE BOOKING"}
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default SearchRoom;
