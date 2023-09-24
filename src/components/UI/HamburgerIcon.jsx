const HamburgerIcon = (props) => {
  return (
    <button
      className="hamburger-icon"
      aria-controls="main-nav"
      aria-expanded={props.navigationState}
      aria-label={`Click to ${
        !props.navigationState ? "open" : "close"
      } the menu`}
      onClick={props.onClick}
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
