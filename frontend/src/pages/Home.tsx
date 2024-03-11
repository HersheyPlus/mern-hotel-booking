const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="space-y-4 xl:max-w-[500px] overflow-scroll">
          <h1 className="text-5xl xl:text-[72px] font-bold text-gray-200">
            Find your next stay
          </h1>
          <p className="text-sm md:text-base 2xl:text-lg text-gray-400">
            Planning your dream vacation? Look no further! We've scoured the web
            to find you the lowest prices on hotels, ensuring that you get the
            most out of your travel budget. Whether you're dreaming of a
            relaxing beach getaway, an adventurous mountain retreat, or
            exploring the vibrant sights of a bustling city, our website has the
            perfect accommodation options for you. With our user-friendly
            interface and extensive search capabilities, finding the ideal hotel
            at the best price has never been easier. Say goodbye to endless
            browsing and let us help you turn your dream vacation into a reality
            without breaking the bank. Start planning your next adventure today!
          </p>
        </div>
        <div className="hidden xl:block">
          <img src="/hero.jpeg" alt="hero" className="rounded-xl" />
        </div>
      </div>
      <hr className="border border-gray-600" />
      <div className="overflow-hidden group relative">
        <img src="/img1.jpeg" alt="" className="rounded-lg opacity-65" />
        <h1 className="absolute top-1/2 z-40 font-bold capitalize text-xl lg:text-5xl text-center text-gray-200 font xl:left-[9%] 2xl:left-[11%]">sometimes happiness can be in travel & trip format </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      <div className="overflow-hidden relative">
        <img src="/img2.jpeg" alt="" className="rounded-lg opacity-70 " />
        <h1 className="absolute left-[33%] sm:left-[35%] xl:left-[38%] top-1/2 z-40 font-bold capitalize text-xl lg:text-4xl text-center text-gray-200 font">Cheap</h1>
      </div>
      <div className="overflow-hidden group relative">
        <img src="/img3.jpeg" alt="" className="rounded-lg opacity-70" />
        <h1 className="absolute left-[33%] sm:left-[35%] xl:left-[38%] top-1/2 z-40 font-bold capitalize text-xl lg:text-4xl text-center text-gray-200 font">Worth</h1>
      </div>
      <div className="overflow-hidden group relative">
        <img src="/img4.jpeg" alt="" className="rounded-lg opacity-70" />
        <h1 className="absolute left-[33%] sm:left-[35%] xl:left-[38%] top-1/2 z-40 font-bold capitalize text-xl lg:text-4xl text-center text-gray-200 font">Enjoy</h1>
      </div>
      </div>
      <hr className="border border-gray-600" />
    </div>
  );
};

export default Home;

