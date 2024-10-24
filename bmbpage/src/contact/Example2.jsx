import { useReducer } from "react";

export default function Example2() {
  const activeBtnStyling = "font-medium pt-1 pb-1 xl:pl-5 p-3 xl:w-full xl:flex inline-block bg-white text-green-700";
  const inactiveBtnStyling = "font-medium pt-1 pb-1 xl:pl-5 p-3 xl:w-full xl:flex inline-block";
  const [activeButton, dispatch] = useReducer(reducer, 1); // Initial active button is 1

  function reducer(activeButton, action) {
    return action.type; // Set the active button to the new value
  }

  const buttonData = [
    { id: 1, text: "One", data: { data1: "content 1 part 1", data2: "content 1 part 2" } },
    { id: 2, text: "Two", data: { data1: "content 2 part 1", data2: "content 2 part 2" } },
    { id: 3, text: "Three", data: { data1: "content 3 part 1", data2: "content 3 part 2" } },
    // ... other buttons
  ];

  return (
    <div>
      <div className="bg-blue-200">
        {buttonData.map((button) => (
          <button
            key={button.id}
            className={activeButton === button.id ? activeBtnStyling : inactiveBtnStyling}
            onClick={() => dispatch({ type: button.id })}
          >
            {button.text}
          </button>
        ))}
      </div>
      <div>
        <p>{buttonData[activeButton - 1].data.data1}</p>
        <p>{buttonData[activeButton - 1].data.data2}</p>
      </div>
    </div>
  );
}