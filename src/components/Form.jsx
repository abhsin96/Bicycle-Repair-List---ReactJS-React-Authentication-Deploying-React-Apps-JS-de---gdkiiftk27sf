import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { repairAdd } from "../redux/action";

const Form = () => {
  const [formData, setFormData] = useState({
    id: Math.random(),
    owner: "",
    model: "",
    description: "",
    done: false,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(repairAdd(formData));
          setFormData({
            id: Math.random(),
            owner: "",
            model: "",
            description: "",
            done: false,
          });
        }}
      >
        <label htmlFor="owner-text-box">Owner</label>
        <input
          id="owner-text-box"
          type="text"
          name="owner"
          onChange={handleChange}
          required
        />
        <label htmlFor="model-text-box">Model</label>
        <input
          id="model-text-box"
          type="text"
          name="model"
          onChange={handleChange}
          required
        />
        <label htmlFor="description-text-box">Description</label>
        <input
          id="description-text-box"
          type="text"
          name="description"
          onChange={handleChange}
          required
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Form;
