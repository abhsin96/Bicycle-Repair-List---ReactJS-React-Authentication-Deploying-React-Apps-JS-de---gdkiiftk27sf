import React from "react";
import { useDispatch } from "react-redux";
import { repairRemoved, repairUpdated } from "../actions";

const List = ({ owner, model, description, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="repair-item">
      <div>Owner: {owner}</div>
      <div>Model: {model}</div>
      <div>Description: {description}</div>
      <button
        onClick={() =>
          dispatch(
            repairUpdated({
              owner: owner,
              model: model,
              mescription: description,
            })
          )
        }
      >
        Update
      </button>
      <button
        onClick={() => {
          dispatch(repairRemoved(id));
        }}
      >
        Delete
      </button>
      <button>Done </button>
    </div>
  );
};

export default List;
