

const Home = () => {
  return (
    <div className='px-2 md:px-8 flex flex-col md:flex-row gap-8 justify-between'>
    <div className='space-y-4 max-w-[500px] overflow-scroll'>
      <h1 className="text-5xl xl:text-[72px] font-bold text-gray-200">Find your next stay</h1>
      <p className="text-sm md:text-base 2xl:text-lg text-gray-400">
        Planning your dream vacation? Look no further! We've scoured the web to find you the lowest prices on hotels, ensuring that you get the most out of your travel budget. Whether you're dreaming of a relaxing beach getaway, an adventurous mountain retreat, or exploring the vibrant sights of a bustling city, our website has the perfect accommodation options for you. With our user-friendly interface and extensive search capabilities, finding the ideal hotel at the best price has never been easier. Say goodbye to endless browsing and let us help you turn your dream vacation into a reality without breaking the bank. Start planning your next adventure today!
      </p>
    </div>
    <div className='hover:scale-90 hover:rotate-2 cursor-pointer transition-all'>
      <img src="/hero.jpeg" alt="hero" className='rounded-xl h-full' />
    </div>
    </div>
  )
}

export default Home