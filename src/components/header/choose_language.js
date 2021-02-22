import React from "react";
import "./headerStyle.scss";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import Group121 from "./Group121.svg";
import Group120 from "./Group 120.svg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Group120})`,
  },
};

function ShooseLanguage() {
  return (
    <>
      <div className="mb-2 header__chooselanguage">
        <img src={Group121} alt="Vector" />
        <DropdownButton
          style={styles.paperContainer}
          as={ButtonGroup}
          key="left"
          id={`dropdown-button-drop-left`}
          drop="left"
          variant="light"
          title={""}
        >
          <Dropdown.Item eventKey="5">
            <a href="#">
              <img src={Group120} alt="Vector" />
            </a>
          </Dropdown.Item>

          <Dropdown.Divider />
        </DropdownButton>
      </div>
    </>
  );
}
export default ShooseLanguage;
