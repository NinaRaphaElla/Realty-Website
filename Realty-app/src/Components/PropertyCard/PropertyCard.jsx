import propertyImage from "./property-img.png";
import propTypes from "prop-types";

const PropertyCard = (props) => {
  return (
    <>
      <div>
        <div className="bg-white flex flex-col max-w-80 h-[460px]">
          <div className="relative">
            <img
              className="max-w-full relative"
              alt="Property image"
              src={propertyImage}
            />
            <p className="absolute m-0 top-0 bg-primary text-white text-base py-1 px-6">
              Featured
            </p>
          </div>

          <div className="text-black p-4">
            <h1 className="m-0 mb-2 text-2xl">{props.title}</h1>
            <p className="m-0 mb-2 text-gray text-xs font-sans">
              {props.description}
            </p>
            <p className="m-0 mb-2 text-2xl font-sans font-semibold">
              &#8369;{props.price}
            </p>

            {/* property overview div */}
            <div className="flex justify-between font-sans text-xs mb-6 font-medium text-center text-gray">
              <div>
                <p className="m-0 ">Bedrooms</p>
                <p className="m-0">{props.bedQuantity}</p>
              </div>
              <div>
                <p className="m-0">Bathrooms</p>
                <p className="m-0">{props.bathQuantity}</p>
              </div>
              <div>
                <p className="m-0">Year Built</p>
                <p className="m-0">{props.yearBuilt}</p>
              </div>
              <div>
                <p className="m-0">Land Area</p>
                <p className="m-0">{props.landArea} sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyCard.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  price: propTypes.number,
  bedQuantity: propTypes.number,
  bathQuantity: propTypes.number,
  yearBuilt: propTypes.number,
  landArea: propTypes.number,
};

export default PropertyCard;
