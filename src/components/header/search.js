import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import vector from "./Vector.svg";
import "./headerStyle.scss";

function Search() {
  return (
    <>
      <div className="mb-2 search-form">
        <img src={vector} alt="Vector" />
        <DropdownButton
          as={ButtonGroup}
          key="left"
          id={`dropdown-button-drop-left`}
          drop="left"
          variant="light"
          title={""}
        >
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">
            <input
              class="form-control"
              type="text"
              placeholder="Hit enter to search or ESC to close"
            />
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}
export default Search;
