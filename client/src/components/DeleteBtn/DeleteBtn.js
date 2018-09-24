import React from "react";
import "./DeleteBtn.css";

//the delete button to take articles off the list
const DeleteBtn = props => (
    <span className="delete-btn" {...props}>
        ✗
  </span>
);

export default DeleteBtn;
