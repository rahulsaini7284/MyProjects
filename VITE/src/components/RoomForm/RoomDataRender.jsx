import React, { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { http, httpFile } from "../config/axiosConfig";
import { Button, Pagination, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import queryString from "query-string";
import "./roomDataRender.css";

const RoomDataRender = ({ value, color }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState();
  console.log(data);

  const [query, setQuery] = useState({
    limit: 6,
    sortBy: "roomType",
    page: 0,
    sortOrder: 1,
  });

  const [totalRecords, setTotalRecords] = useState(null);
  console.log(totalRecords);
  let TotalPage = data && [
    ...Array(Math.ceil(totalRecords / query.limit)).keys(),
  ];

  // useEffect(() => {
  //   http
  //     .get(`roomData?${queryString.stringify(query)}`)
  //     .then((res) => {
  //       console.log(res.data.result, res.data.Total);
  //     })
  //     .catch((er) => console.log(er.message));
  // }, []);
  useEffect(() => {
    http
      .get(`roomData?${queryString.stringify(query)}`)
      .then((res) => {
        setData(res.data.result), setTotalRecords(res.data.Total);
      })
      .catch((er) => console.log(er.message));
  }, [query]);

  const handleLimit = (e) => {
    let lim = Number(e.target.value);
    setQuery({ ...query, limit: lim });
  };

  const renderStar = (value) => {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        i < value ? (
          <FaStar style={{ color }} />
        ) : (
          <FaRegStar style={{ color }} />
        )
      );
    }
    return stars;
  };

  return (
    <div
      style={{
        boxSizing: "border-box",
      }}
    >
      <div className="searchBar">
        <input
          type="text"
          name=""
          placeholder="Search Room Type Here....."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Form.Select onChange={handleLimit} style={{ marginTop: "2rem" }}>
        <option value={6}>6</option>
        <option value={12}>12</option>
        <option value={18}>18</option>
      </Form.Select>
      <div className="Main">
        {data
          ?.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.roomType.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((d) => (
            <div className="card-body">
              <div className="img-div">
                <img src={d.images[0]} alt="" />
              </div>
              <div className="roomName">
                <h3>{d.roomType}</h3>
                <p>{d.status === true ? "Available" : "Booked"}</p>
                <div className="child-1">
                  <div>{renderStar(d.rating)}</div>
                  <div>&#8377;{d.price}</div>
                </div>
                <hr style={{ color: "whitesmoke" }} />
                <div className="child-2">
                  <NavLink to={"/contactUs"} className="link-1">
                    <Button>Send Message</Button>
                  </NavLink>
                  <NavLink to={d.status && "/bookRoom"}>
                    <Button disabled={!d.status}>
                      {d.status === true ? "Book Now" : "Booked"}
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Pagination style={{ display: "flex", justifyContent: "center" }}>
        {TotalPage?.map((p) => (
          <Pagination.Item
            key={p}
            onClick={() => setQuery({ ...query, page: p })}
            active={p === query.page ? true : false}
          >
            {p + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default RoomDataRender;

RoomDataRender.defaultProps = {
  value: 2,
  color: "white",
};
