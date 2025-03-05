// ** React Imports
import { Fragment } from "react";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Third Party Components
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Bell, X, Check, AlertTriangle } from "react-feather";

// ** Reactstrap Imports
import {
  Button,
  Badge,
  Input,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Card,
} from "reactstrap";

// ** Avatar Imports
import noti from "@src/assets/images/portrait/small/notification.svg";
import noti2 from "@src/assets/images/portrait/small/noti2.svg";

const NotificationDropdown = () => {
  // ** Notification Array
  const notificationsArray = [
    {
      img: noti,
      subtitle: "Date in notification #3332101 has been changed.",
      title: (
        <p className="media-heading d-flex justify-content-between">
          <span className="fw-bolder">Date changed</span>
          <span className="text-small">12 Sep 2024</span>
        </p>
      ),
    },
    {
      img: noti2,
      subtitle: "Date in notification #3332101 has been changed.",
      title: (
        <p className="media-heading d-flex justify-content-between">
          <span className="fw-bolder">Date changed</span>
          <span>12 Sep 2024</span>
        </p>
      ),
    },
    {
      img: noti2,
      subtitle: "Date in notification #3332101 has been changed.",
      title: (
        <p className="media-heading d-flex justify-content-between">
          <span className="fw-bolder">Date changed</span>
          <span>12 Sep 2024</span>
        </p>
      ),
    },
  ];

  // ** Function to render Notifications
  /*eslint-disable */
  const renderNotificationItems = () => {
    return (
      <PerfectScrollbar
        component="li"
        className="media-list scrollable-container"
        options={{
          wheelPropagation: false,
        }}
      >
        {notificationsArray.map((item, index) => {
          return (
            <a
              key={index}
              className="d-flex"
              href={item.switch ? "#" : "/"}
              onClick={(e) => {
                if (!item.switch) {
                  e.preventDefault();
                }
              }}
            >
              <div
                className={classnames("list-item d-flex", {
                  "align-items-start": !item.switch,
                  "align-items-center": item.switch,
                })}
              >
                {!item.switch ? (
                  <Fragment>
                    <div className="me-1">
                      <Avatar
                        {...(item.img
                          ? { img: item.img, imgHeight: 38, imgWidth: 38 }
                          : item.avatarContent
                          ? {
                              content: item.avatarContent,
                              color: item.color,
                            }
                          : item.avatarIcon
                          ? {
                              icon: item.avatarIcon,
                              color: item.color,
                            }
                          : null)}
                      />
                    </div>
                    <div className="list-item-body flex-grow-1">
                      {item.title}
                      <small className="notification-text">
                        {item.subtitle}
                      </small>
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.title}
                    {item.switch}
                  </Fragment>
                )}
              </div>
            </a>
          );
        })}
      </PerfectScrollbar>
    );
  };
  /*eslint-enable */

  return (
    <UncontrolledDropdown
      tag="li"
      className="dropdown-notification nav-item me-25"
    >
      <DropdownToggle
        tag="a"
        className="nav-link"
        href="/"
        onClick={(e) => e.preventDefault()}
      >
        <Bell size={21} />
        <Badge pill color="danger" className="badge-up">
          1
        </Badge>
      </DropdownToggle>
      <DropdownMenu end tag="ul" className="dropdown-menu-media rounded-5 mt-0">
        <li className="dropdown-menu-header">
          <DropdownItem className="d-flex" tag="div" header>
            <p className="notification-title text-black mb-0 me-auto">
              Notifications
              <Badge tag="div" className="ms-1 fs-4 px-1" color="light-primary" pill>
                1
              </Badge>
            </p>
          </DropdownItem>
        </li>
        {renderNotificationItems()}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default NotificationDropdown;
