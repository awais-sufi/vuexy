import React from "react";
import { Card, CardBody, Input, Button, Row, Col } from "reactstrap";

import Select from "react-select";

const colourOptions = [
  { value: "Select Steamshipline", label: "Select Steamshipline" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];
const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "30px",
  }),
};
const Dashboard = () => {
  return (
    <div className="conainer-fluid mx-3">
      <hr></hr>
      <h1 className=" fw-bold text-center text-lg-start text-dark a my-2">DashBoard</h1>
      <Card className="rounded-pill bg-white shadow-none">
        <CardBody className="mt-1 ">
          <Row className="d-flex justify-content-md-center">
            <Col className="mb-1" xl="5" md="6" sm="12">
              <Select
                className="react-select rounded-5"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                options={colourOptions}
                styles={customStyles}
              />
            </Col>
            <Col className="mb-1" xl="5" md="6" sm="12">
              <Input
                type="text"
                id="bookingInput"
                placeholder="Enter Booking Number"
                className="rounded-5"
              />
            </Col>
            <Col className="d-flex mb-1 align-items-end" xl="2" md="6" sm="12">
              <Button color="primary" className="w-100  rounded-5">
                Add Booking
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Dashboard;
