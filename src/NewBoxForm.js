import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    height: "",
    width: "",
    bgColor: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bgColor">Background Color</label>
      <br />
      <input
        type="text"
        name="bgColor"
        id="bgColor"
        placeholder="Background Color"
        onChange={handleChange}
        value={formData.bgColor}
      />
      <br />
      <label htmlFor="height">Height: {formData.height}</label>
      <br />
      <input
        type="range"
        name="height"
        id="height"
        min={0}
        max={300}
        placeholder="height"
        onChange={handleChange}
        value={formData.height}
      />
      <br />
      <label htmlFor="width">Width: {formData.width}</label>
      <br />
      <input
        type="range"
        min={0}
        max={300}
        name="width"
        id="width"
        placeholder="width"
        onChange={handleChange}
        value={formData.width}
      />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
