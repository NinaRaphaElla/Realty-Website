import propTypes from "prop-types";

const CTAButton = (props) => {
  return (
    <>
      <button className="flex items-center justify-center bg-accent border-2 border-accent text-white hover:bg-white font-regular py-2 px-6 transition duration-300 ease-in-out group hover:text-accent hover:border-2 hover:border-accent">
        <p className="flex justify-center font-playFair group-hover:text-accent">
          {props.btnName}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          className=" ml-3"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </>
  );
};

CTAButton.propTypes = {
  btnName: propTypes.string,
};

export default CTAButton;
