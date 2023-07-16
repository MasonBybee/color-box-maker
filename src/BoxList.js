import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const initialState = [
    {
      id: "",
      height: "",
      width: "",
      bgColor: "",
    },
  ];
  const addBox = (boxData) => {
    setBoxes((boxes) => {
      return [...boxes, { ...boxData, id: uuid() }];
    });
  };
  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const [boxes, setBoxes] = useState(initialState);
  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(({ height, width, bgColor, id }) => (
        <Box
          key={id}
          id={id}
          removeBox={removeBox}
          height={height}
          width={width}
          bgColor={bgColor}
        />
      ))}
    </div>
  );
};

export default BoxList;
