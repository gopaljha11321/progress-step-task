import React from "react";
import ProgressStep from "./progress-step";

const ProgressBar = ({
  options,
  currentIndex,
  handleClick,
  direction = "horizontal",
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "fit-content",
        ...(direction === "vertical" && {
          flexDirection: "column",
          gap: "5px",
        }),
      }}
    >
      {options.map((step, index) => (
        <ProgressStep
          key={index}
          label={step.label}
          onClick={() => handleClick(index)}
          index={index}
          description={step.description}
          {...(index === options.length - 1 && { isLeave: true })}
          currentIndex={currentIndex}
          direction={direction}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
