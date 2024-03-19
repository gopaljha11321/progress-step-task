import React from "react";
import ProgressBar from "./progress-bar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  currentIndex: 2,
  options: [
    { label: "Passed", completed: false, description: "Description" },
    { label: "Current", completed: false, description: "Description" },
    { label: "Ahead", completed: false, description: "Description" },
  ],
  direction: "vertical",
  handleClick: () => {
    console.log("test");
  },
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  currentIndex: 2,
  options: [
    { label: "Passed", completed: false, description: "Description" },
    { label: "Current", completed: false, description: "Description" },
    { label: "Ahead", completed: false, description: "Description" },
  ],
  direction: "horizontal",
  handleClick: () => {
    console.log("test");
  },
};
