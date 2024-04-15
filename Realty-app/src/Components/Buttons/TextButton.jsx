import propTypes from "prop-types";
import { RiArrowRightLine } from "react-icons/ri";

const TextButton = (props) => {
  return (
    <>
      <button
        className="flex justify-center items-center group"
        onClick={props.onClick}
      >
        <p className="text-sm text-black group-hover:text-accent">
          {props.btnName}
        </p>
        <span className="ml-1">
          <RiArrowRightLine className="text-black group-hover:text-accent group-hover:ml-2 transition-all ease-in-out duration-200" />
        </span>
      </button>
    </>
  );
};

export default TextButton;
