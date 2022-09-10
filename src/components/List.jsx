import React from "react";
import { useDispatch } from "react-redux";
import { repairRemoved } from "../redux/action";

const List = ({ Owner, Model, Description, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="repair-item">
      <div>Owner: {Owner}</div>
      <div>Model: {Model}</div>
      <div>Description: {Description}</div>
      <button>Update</button>
      <button onChange={() => dispatch(repairRemoved(id))}>Delete</button>
      <button>Done </button>
    </div>
  );
};

export default List;
