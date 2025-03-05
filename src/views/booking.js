import { FilePlus, ChevronLeft, ChevronRight } from "react-feather";
import {
  Card,
  Pagination,
  PaginationItem,
  Input,
  PaginationLink,
  Row,
  Col,
} from "reactstrap";
import { useState } from "react";
import Select from "react-select";
import "./font.css";
import Flatpickr from "react-flatpickr";

import logo from "@src/assets/images/logo/icon.svg";
import DeleteBookingModal from "./DeleteBookingModal";

import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/pages/page-form-validation.scss";

const colourOptions1 = [
  { value: "Steamshipline", label: "Steamshipline" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];
const colourOptions3 = [
  { value: "Rail Cuttoff", label: "Rail Cuttoff" },
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
const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-white py-2">
        <div className="row text-center text-lg-start align-items-center mb-3 mx-3">
          <div className="col-md-6">
            <h1 className="a">Booking list</h1>
          </div>
          <div className="col-md-6 d-flex justify-content-lg-end justify-content-center mt-sm-1">
            <button className="d-flex align-items-center gap-1 p-1 rounded-5 border border-[#525356] text-[#525356] hover:bg-[#525356] hover:text-white transition">
              <FilePlus className="ms-1 a" />
               Export CSV File
            </button>
          </div>
        </div>

        <Card className="rounded-5 bg-white border-1 p-1 mx-3">
          <Row>
            <Col className="mb-1" xl="2" md="6" sm="12">
              <Input
                type="text"
                id="bookingInput"
                placeholder="Booking Number"
                className="rounded-5"
              />
            </Col>
            <Col className="mb-1" xl="2" md="6" sm="12">
              <Select
                className="react-select rounded-5"
                classNamePrefix="select"
                defaultValue={colourOptions1[0]}
                options={colourOptions1}
                styles={customStyles}
              />
            </Col>
            <Col className="mb-1" xl="2" md="6" sm="12">
              <Flatpickr
                value={selectedDate}
                onChange={(date) => setSelectedDate(date[0])}
                options={{
                  dateFormat: "m/d/Y",
                  enableTime: false,
                }}
                className="form-control rounded-5"
                placeholder="ERD"
              />
            </Col>

            <Col className="mb-1" xl="2" md="6" sm="12">
              <Select
                className="react-select rounded-5"
                classNamePrefix="select"
                defaultValue={colourOptions3[0]}
                options={colourOptions3}
                styles={customStyles}
              />
            </Col>
            <Col className="" xl="2" md="6" sm="12">
              <p className="d-flex p-1 text-end text-danger small fw-semibold cursor-pointer">
                <span className="c">Clear filter</span>
              </p>
            </Col>
          </Row>

          <div className="row overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#f2f2f2]">
                  <th className="px-3 f text-left text-[#525356] font-small">
                    NUMBER
                  </th>
                  <th className="px-3 f text-left text-[#525356] font-small">
                    STEAMSHIP LINE
                  </th>
                  <th className="px-3  f text-left text-[#525356] font-small">
                    EARLIEST RECEIVING DATE
                  </th>
                  <th className="px-3 f text-left text-[#525356] font-small">
                    RAIL CUTOFF
                  </th>
                  <th className="px-3 f text-left text-[#525356] font-small">
                    LAST UPDATE
                  </th>
                  <th className="px-3 f text-right text-[#525356] font-small">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" px-3 f text-left text-[#525356] font-small">
                    123456
                  </td>
                  <td className=" px-3 f text-left text-[#525356] font-small">
                    Maersk
                  </td>
                  <td className=" px-3 f text-left text-[#525356] font-small">
                    2022-10-10
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 00:00:00
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 03:50:05 PM
                  </td>
                  <td className="d-flex p-2 text-end small fw-semibold cursor-pointer">
                    <img src={logo} className="me-1" />
                    <span onClick={openModal} className="c">
                      Delete
                    </span>
                    <DeleteBookingModal
                      isOpen={isModalOpen}
                      onClose={closeModal}
                    />
                  </td>
                </tr>
                <tr>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    123456
                  </td>
                  <td className=" px-3 text-left f  text-[#525356] font-small">
                    Maersk
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2022-10-10
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 00:00:00
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 03:50:05 PM
                  </td>
                  <td className="d-flex p-2 text-end small fw-semibold cursor-pointer">
                    <img src={logo} className="me-1" />
                    <span onClick={openModal} className="c">
                      Delete
                    </span>
                    <DeleteBookingModal
                      isOpen={isModalOpen}
                      onClose={closeModal}
                    />
                  </td>
                </tr>
                <tr>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    123456
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    Maersk
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2022-10-10
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 00:00:00
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 03:50:05 PM
                  </td>
                  <td className="d-flex p-2 text-end small fw-semibold cursor-pointer">
                    <img src={logo} className="me-1" />
                    <span onClick={openModal} className="c">
                      Delete
                    </span>
                    <DeleteBookingModal
                      isOpen={isModalOpen}
                      onClose={closeModal}
                    />
                  </td>
                </tr>
                <tr>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    123456
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    Maersk
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2022-10-10
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 00:00:00
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 03:50:05 PM
                  </td>
                  <td className="d-flex p-2 text-end small fw-semibold cursor-pointer">
                    <img src={logo} className="me-1" />
                    <span onClick={openModal} className="c">
                      Delete
                    </span>
                    <DeleteBookingModal
                      isOpen={isModalOpen}
                      onClose={closeModal}
                    />
                  </td>
                </tr>
                <tr>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    123456
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    Maersk
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2022-10-10
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 00:00:00
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 03:50:05 PM
                  </td>
                  <td className="d-flex p-2 text-end small fw-semibold cursor-pointer">
                    <img src={logo} className="me-1" />
                    <span onClick={openModal} className="c">
                      Delete
                    </span>
                    <DeleteBookingModal
                      isOpen={isModalOpen}
                      onClose={closeModal}
                    />
                  </td>
                </tr>
                <tr>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    123456
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    Maersk
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2022-10-10
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 00:00:00
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 03:50:05 PM
                  </td>
                  <td className="d-flex p-2 text-end small fw-semibold cursor-pointer">
                    <img src={logo} className="me-1" />
                    <span onClick={openModal} className="c">
                      Delete
                    </span>
                    <DeleteBookingModal
                      isOpen={isModalOpen}
                      onClose={closeModal}
                    />
                  </td>
                </tr>
                <tr>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    123456
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    Maersk
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2022-10-10
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 00:00:00
                  </td>
                  <td className=" px-3 text-left f text-[#525356] font-small">
                    2024-03-15 at 03:50:05 PM
                  </td>
                  <td className="d-flex p-2 text-end small fw-semibold cursor-pointer">
                    <img src={logo} className="me-1" />
                    <span onClick={openModal} className="c">
                      Delete
                    </span>
                    <DeleteBookingModal
                      isOpen={isModalOpen}
                      onClose={closeModal}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row text-center text-md-start  align-items-center mx-2 b rounded-pill px-1 ">
            <div className="col-md-6 mt-2">
              <p className="fs-6 font-semibold text-[#525356]">
                Showing 1 to 8 of 200 contacts
              </p>
            </div>

            <div className="col-md-6  d-flex flex-wrap justify-content-center justify-content-lg-end">
              <Pagination size="sm" className=" mt-2 ">
                <PaginationItem>
                  <PaginationLink href="#" first>
                    <ChevronLeft size={15} /> Prev
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" last>
                    Next
                    <ChevronRight size={15} />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Booking;
