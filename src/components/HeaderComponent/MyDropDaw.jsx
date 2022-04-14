import { Dropdown } from "react-bootstrap";

export const MyDropDaw = ({ title, action1, action2, action3 }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="sucses"
        id="dropdown-basic"
        style={{
          color: "white",
          fontSize: "1rem ",
          fontWeight: "bold",
          margin: "0",
          padding: "0",
        }}
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          href="#/action-1"
          style={{ fontSize: "0.7rem ", fontWeight: "bold" }}
        >
          {action1}
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-2"
          style={{ fontSize: "0.7rem ", fontWeight: "bold" }}
        >
          {action2}
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          style={{ fontSize: "0.7rem ", fontWeight: "bold" }}
        >
          {action3}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
