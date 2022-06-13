import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { httpGet, http } from "../config/axiosConfig.js";
import "./bookedRoomData.css";
import Swal from "sweetalert2";

const BookedRoomData = () => {
  const Navigate = useNavigate();
  const [roomBookData, setRoomBookData] = useState(null);
  console.log(roomBookData);

  // useEffect(() => {
  //   http(`room`)
  //     .then((res) => console.log(res.data.result))
  //     .catch((er) => console.log(er.message));
  // });
  useEffect(() => {
    httpGet(`room`)
      .then((res) => setRoomBookData(res.data.result))
      .catch((er) => console.log(er.message));
  }, []);

  const deleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        http.delete(`room/${id}`);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
     
      <Row>
        <Col xs={12} lg={10}>
          <div className="product-data" style={{ backgroundColor: "crimson" }}>
            <div style={{ marginLeft: "2rem" }}>
              <strong>START_DATE</strong>
            </div>
            <div style={{ marginLeft: "5rem" }}>
              <strong>END_DATE</strong>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <strong>ADULTS</strong>
            </div>
            <div>
              <strong>CHILD</strong>
            </div>
            <div>
              <strong>ROOMS</strong>
            </div>
            <div>
              <strong>ACTIONS</strong>
            </div>
          </div>
          {roomBookData?.map((r) => (
            <div className="product-data">
              <div className="p-name">{r.startDate}</div>
              <div className="p-name">{r.endDate}</div>
              <div className="p-color">{r.adults}</div>
              <div className="p-stock">{r.child}</div>
              <div className="p-price">{r.totalRoom}</div>
              <div className="p-button">
                <MdOutlineDeleteOutline
                  className="delete"
                  onClick={() => deleteData(r._id)}
                />
                <MdOutlineModeEdit
                  className="edit"
                  onClick={() => Navigate(`new/${r._id}`)}
                />
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default BookedRoomData;
