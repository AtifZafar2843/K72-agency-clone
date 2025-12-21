import React from "react";

const Agence = () => {
  return (
    <div>
      <div id="page1">
        <div className="h-[45vh] w-[15vw] bg-red-600 absolute top-[19vh] left-[30vw] rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          />
        </div>
        <div className="relative">
          <div id="page1" className="mt-[50vh]">
            <h1 className="text-[20.5vw] font-[Lausanne-bold] leading-[18vw] text-center">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="pl-[40vw]">
            <p className="text-5xl font-[Lausanne-bold] pr-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We're inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div id="page2"></div>
    </div>
  );
};

export default Agence;
