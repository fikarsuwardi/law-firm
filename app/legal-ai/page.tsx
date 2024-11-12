export default function Page() {
  return (
    <div className="relative h-[65vh] lg:h-[80vh] w-screen text-white overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>

      {/* Content overlay */}
      <div className="relative z-10 h-full bg-black bg-opacity-50">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row items-center flex-nowrap h-full justify-center lg:justify-normal">
            <div className="hidden lg:block lg:w-1/2"></div>
            <div className="lg:w-1/2 px-10 lg:px-0 lg:py-10 lg:pr-24">
              <div className="flex flex-col gap-4 items-start">
                <p className="text-xl lg:text-3xl font-semibold leading-snug">
                  Unlock the power of legal AI with our insightful content,
                  guiding you towards informed decisions in the ever-evolving
                  legal landscape.
                </p>
                <div className="relative">
                  <button className="rounded-full uppercase text-lg font-medium mt-2 inline-flex items-center">
                    Request Demo
                    <span className="ml-2">&rarr;</span>
                  </button>
                  <div className="absolute left-0 bottom-0 h-[2px] w-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
