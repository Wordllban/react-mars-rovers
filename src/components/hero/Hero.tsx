// images
import marsImage from "../../assets/images/mars.png";

export const Hero = () => {
  return (
    <section
      id="about"
      className='mb-36 flex justify-between relative md:px-16
         after:content-[""] after:rotate-[-50deg] after:absolute after:right-[60%] after:top-[-70%] after:h-[50rem] after:w-[20rem]
         after:blur-[85px] after:bg-gradient-to-r after:from-fuchsia-600/30 after:via-cyan-600/20 after:to-indigo-600/50 overflow-hidden'
    >
      <div className="mt-4 py-4 px-8">
        <div className="container mx-auto py-20">
          <div>
            <h1 className="relative text-5xl font-semibold mb-10 z-10  max-w-[16rem] lg:max-w-full">
              Discover Mars <br /> with NASA
            </h1>
            <p className="relative text-2xl font-light mb-48 max-w-sm lg:max-w-lg z-30">
              See new photo from Rovers in Mars. Just choose the Rover with
              camera view and you all set! There are 3 Mars rovers: Curiosity,
              Opportunity and Spirit!
            </p>

            <div className="relative group inline-block">
              <a
                href="#app"
                className="relative transition border-2 border-l-nasa-red
                          border-t-nasa-red border-b-nasa-blue border-r-nasa-blue
                            px-28 py-2 text-xl font-bold z-30"
              >
                Try now
              </a>
              <span
                className="before:transition-all before:duration-500 before:content-['']
                            before:z-under before:w-0 before:h-0 before:absolute before:top-[-85%] before:left-[-35%]
                            before:xl:border-t-[45px] before:border-t[30px] before:xl:border-r-[300px] before:border-r-[200px] before:border-r-transparent before:border-nasa-red/70
                            group-hover:before:z-10 group-hover:before:top-[-0.5rem] group-hover:before:left-[0.13rem]
                            after:transition-all after:duration-500 after:content-['']
                            after:z-under after:w-0 after:h-0 after:absolute after:bottom-[-85%] after:right-[-35%]
                            after:xl:border-b-[45px] after:xl:border-l-[300px] after:border-l-transparent after:border-nasa-blue/70
                            group-hover:after:z-10 group-hover:after:bottom-[-0.48rem] group-hover:after:right-[0.05rem]"
              ></span>
            </div>
          </div>
        </div>

        <img
          src={marsImage}
          alt="Mars"
          className="max-w-3xl xl:max-w-5xl absolute top-[-45%] lg:top-[-55%] 2xl:right-[-15%] sm:right-[-25%] right-[-85%]"
        />
      </div>
    </section>
  );
};
