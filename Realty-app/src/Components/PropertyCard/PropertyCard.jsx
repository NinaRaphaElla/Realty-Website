import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import TextButton from "../Buttons/TextButton";

const PropertyCard = ({ properties }) => {
  const history = useHistory();

  // const [properties, setProperties] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/property")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setProperties(data); //taking the array and updating the property states
  //     });
  // }, []);

  // const featuredProperties = properties.filter(
  //   (property) => property.isFeatured === true
  // );

  return (
    <>
      {properties &&
        properties.map((list) => (
          <div
            className="bg-white flex flex-col max-w-80 h-[450px] hover:-translate-y-2 transition-all ease-in-out duration-200"
            key={list.id}
          >
            <div className="relative">
              <img
                className="max-w-full relative"
                alt="Property image"
                src={list.propertyImg}
              />
              <p className="absolute m-0 top-0 bg-primary text-white text-base py-1 px-6">
                {list.isFeatured === true ? "Featured" : list.status}
              </p>
            </div>

            <div className="text-black p-4 overflow-hidden">
              <h1 className="mb-2 text-xl h-[25%]">{list.title}</h1>
              <p className="mb-2 text-gray text-xs font-sans line-clamp-2">
                {list.description}
              </p>
              <p className="m-0 mb-2 text-xl font-sans font-semibold">
                &#8369;{list.price}
              </p>

              {/* property overview div */}
              {list.overview.map((overviewList) => (
                <div className="flex justify-between font-sans text-xs mb-6 font-medium text-center text-gray">
                  <div>
                    <p>Bedrooms</p>
                    <p>{overviewList.bedroom}</p>
                  </div>
                  <div>
                    <p>Bathrooms</p>
                    <p>{overviewList.bathroom}</p>
                  </div>
                  <div>
                    <p>Year Built</p>
                    <p>{overviewList.yearBuilt}</p>
                  </div>
                  <div>
                    <p>Land Area</p>
                    <p>{overviewList.area} sqft</p>
                  </div>
                </div>
              ))}
              {/* <TextButton btnName={"View more"} onClick={handleViewMore} /> */}
              <Link to={`/property-details/${list.id}`}>
                <TextButton btnName={"View more"} />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default PropertyCard;
