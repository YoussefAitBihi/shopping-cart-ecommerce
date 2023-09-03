import { useState } from "react";

const HamburgerIcon = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked((prevButtonState) => !prevButtonState);
  };

  return (
    <button
      className="hamburger-icon"
      aria-controls="main-nav"
      aria-expanded={isButtonClicked}
      aria-label={!isButtonClicked ? "Open the menu" : "Close the menu"}
      onClick={handleButtonClick}
    >
      <span
        className="hamburger-icon__layer hamburger-icon__layer--top"
        aria-hidden="true"
      ></span>
      <span
        className="hamburger-icon__layer hamburger-icon__layer--middle"
        aria-hidden="true"
      ></span>
      <span
        className="hamburger-icon__layer hamburger-icon__layer--bottom"
        aria-hidden="true"
      ></span>
    </button>
  );
};

export default HamburgerIcon;
