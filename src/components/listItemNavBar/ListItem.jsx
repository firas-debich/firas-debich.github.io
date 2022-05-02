import React from "react";
import { Link } from "react-scroll";
const ListItem = ({ name, style = "", handleFunction }) => {
  return (
    <li>
      <Link
        className={style}
        to={name.toLowerCase()}
        onClick={handleFunction}
        smooth={true}
        duration={500}
      >
        {name}
      </Link>
    </li>
  );
};

export default ListItem;
