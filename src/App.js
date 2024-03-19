import "./App.css";
import ProgressBar from "./components/progress-bar";

function App() {
  let currentIndex = 1;

  const steps = [
    {
      label: "Passed",
      completed: false,
      description: "Description",
    },
    { label: "Current", completed: false, description: "Description" },
    { label: "Ahead", completed: false, description: "Description" },
  ];

  const handleClick = (index) => {
    console.log("index", index);
  };

  return (
    <div className="App">
      <ProgressBar
        currentIndex={currentIndex}
        options={steps}
        handleClick={handleClick}
        direction={"horizontal"}
      />
    </div>
  );
}

export default App;
