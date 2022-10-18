import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import React from "react";
import { ImBin } from "react-icons/im";

import { useDispatch } from "react-redux";
import { deletePost } from "../redux/action";

function Delet({ id }) {
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      <ImBin style={{ cursor: "pointer" }} onClick={handelClick} />
    </div>
  );
}

export default Delet;
