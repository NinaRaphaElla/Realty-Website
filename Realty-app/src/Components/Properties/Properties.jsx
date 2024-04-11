import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import LoadButton from "../Buttons/LoadButton.jsx";
import Header from "../Header/Header.jsx";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";
import photo from "./PropertiesImage.png";

const Properties = () => {
  return (
    <>
      <Header />

      {/* About Background Details */}
      <div className="mx-4 mt-24 md:mx-16 space-y-10">
        <div className="relative">
          <img className="w-full" src={photo} />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white font-medium text-4xl">Properties</h1>

            {/* Rectangle background in Dropdown */}
            <div className="mx-32 absolute justify-center items-center bg-white w-4/5 h-28 top-80 shadow-lg"></div>

            {/* Dropdown - Property Status */}
            <div className="md:flex flex-wrap mt-96 md:space-x-8 absolute justify-center items-center">
              <div>
                <p>Property Status</p>
                <select className="px-2 mt-2 items-center w-48 h-10 bg-white text-gray-700 border-2 border-gray hover:border-gray-400 focus:border-gray-400">
                  <option type="" disabled selected hidden>
                    Featured
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    All status
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    For Sale
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    For Rent
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Sold
                  </option>
                </select>
              </div>


            {/* Property Types */}
              <div>
                <p>Property Types</p>
                <select className="px-2 mt-2 items-center w-48 h-10 bg-white text-gray-700 border-2 border-gray hover:border-gray-400 focus:border-gray-400">
                  <option type="" disabled selected hidden>
                    All types
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Commercial
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Farm Lot
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    House and Lot
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Residential Lot
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Condo
                  </option>
                </select>
              </div>


            {/* Price Range */}
              <div>
                <p>Price Range</p>
                <select className="px-2 mt-2 items-center w-48 h-10 bg-white text-gray-700 border-2 border-gray hover:border-gray-400 focus:border-gray-400">
                  <option type="" disabled selected hidden>
                    Any price
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    ₱150K - ₱300K
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    ₱350K - ₱600K
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    ₱500K - ₱900K
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    ₱700K - ₱1.2M
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    ₱900K - ₱1.6M
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    ₱1M - ₱1.8M
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    ₱1.2M - ₱2.2M
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    ₱3M and Above
                  </option>
                </select>
              </div>


            {/* Location */}
              <div>
                <p>Locations</p>
                <select className="px-2 mt-2 items-center w-48 h-10 bg-white text-gray-700 border-2 border-gray hover:border-gray-400 focus:border-gray-400">
                  <option type="" disabled selected hidden>
                    Select location
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Abra
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Aklan
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Albay
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Bataan
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Batangas
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Bulacan
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Cagayan
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Camarines Sur
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Cavite
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Davao del Norte
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Davao del Sur
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Davao Occidental
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Eastern Samar
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Guimaras
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Iloilo
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Ilocos Norte
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Ilocos Sur
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Kalinga
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    La Union
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Laguna
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Leyte
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Maguindanao
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Marinduque
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Masbate
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Negros Occidental
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Negros Oriental
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Nueva Ecija
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Occidental Mindoro
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Oriental Mindoro
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Palawan
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Pampanga
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Pangasinan
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Quezon
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Quirino
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Rizal
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Romblon
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Samar
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Tarlac
                  </option>

                  <option className="hover:bg-gray hover:text-white">
                    Zambales
                  </option>
                </select>
              </div>

              {/* Search Button */}
              <div>
                <button className="flex px-2 mt-8 items-center w-28 h-10 bg-accent text-white border-2 border-accent">
                  <AiOutlineSearch className="mr-2 m-1 size-6" />
                  <p>Search</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap mt-40 gap-20 justify-center items-center">
        
          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
       

        
          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
      
          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
        

          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
       

        
          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
      

        
          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
       

          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
       

          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
        
  
        
          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
        

        
          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
        

          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
        

          <PropertyCard
            title="House and Lot For Sale in Taguig City"
            description="Impressive House and Lot with Roof Deck and Swimming Pool…"
            price={45000000}
            bedQuantity={2}
            bathQuantity={2}
            yearBuilt={2024}
            landArea={1024}
          />
      </div>

      {/* Load Button */}
      <div className="mt-16 flex justify-center mb-10">
        <LoadButton btnName={"Load more"} />
      </div>
    </>
  );
};

export default Properties;
