const LoadButton = () => {
  return (
    <>
      <div className="flex justify-center">
        <button className="flex items-center bg-accent border-2 border-accent text-white hover:bg-white font-regular py-2 px-6 transition duration-300 ease-in-out group hover:text-accent hover:border-2 hover:border-accent">
          <p className="flex justify-center font-playFair group-hover:text-accent">
            View all listings
          </p>
        </button>
      </div>
    </>
  );
};

export default LoadButton;
