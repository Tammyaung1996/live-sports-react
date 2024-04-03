import React, { useState } from "react";
import "../../assets/css/twoD.css";
import "../../assets/css/threeD.css";
import PlayerInfo from "../../components/PlayerInfo";
import round from "../../assets/img/round.png";
import puu from "../../assets/img/puu.png";
import quickselect from "../../assets/img/quickselect.png";
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";

const ThreeD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const lottoHome = [
    { id: 1, title: "ပတ်လည်", img: round, link: "/" },
    { id: 2, title: "အပူး", img: puu, link: "/" },
    { id: 3, title: "အမြန်ရွေး", img: quickselect, link: "/" },
  ];

  const numberPads = [
    {
      id: 1,
      title: "000-099",
    },
    {
      id: 2,
      title: "100-199",
    },
    {
      id: 3,
      title: "200-299",
    },
    {
      id: 4,
      title: "300-399",
    },
    {
      id: 5,
      title: "400-499",
    },
    {
      id: 6,
      title: "500-599",
    },
    {
      id: 7,
      title: "600-699",
    },
    {
      id: 8,
      title: "700-799",
    },
    {
      id: 9,
      title: "800-899",
    },
    {
      id: 10,
      title: "900-999",
    },
  ];

  const times = [
    { time: "10:30 AM", class: "whiteBtn" },
    { time: "12:00 AM", class: "whiteBtn" },
    { time: "02:30 AM", class: "purpleBtn" },
    { time: "04:30 AM", class: "purpleBtn" },
  ];
  return (
    <div className="twoDContainer" style={{ paddingBottom: "200px" }}>
      <PlayerInfo />
      <div className="my-3 mx-3 text-center py-2 border-top d-flex align-items-center justify-content-between mb-4">
        {lottoHome &&
          lottoHome.map((item) => {
            return (
              <NavLink to={item.link} key={item.id}>
                <div className="d-flex flex-column align-items-center mt-3">
                  <img src={item.img} />
                  <small className="text-white mt-2">{item.title}</small>
                </div>
              </NavLink>
            );
          })}
      </div>
      <div className="text-center  mb-4 px-2">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="number" placeholder="အနည်းဆုံး ၁၀၀ကျပ်" />
          </Form.Group>
        </Form>
        <Accordion>
          {numberPads &&
            numberPads.map((number, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{number.title}</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>

        <div
          className="border mt-3"
          style={{ width: "100%", height: "100px", background: "10061e" }}
        ></div>
      </div>
    </div>
  );
};

export default ThreeD;
