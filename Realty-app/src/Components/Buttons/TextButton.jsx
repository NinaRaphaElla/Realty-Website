import propTypes from "prop-types";
import { RiArrowRightLine } from "react-icons/ri";

const TextButton = (props) => {
  return (
    <>
      <button className="flex justify-center items-center">
        <p className="text-sm text-black">{props.btnName}</p>
        <span className="ml-1">
          <RiArrowRightLine className="text-black" />
        </span>
      </button>
    </>
  );
};

export default TextButton;
