import { useScroll } from "framer-motion";
import React, { useState } from "react";

function HeroSection() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (
      Math.floor(data * 100) //the *100 is to make it percent
    ) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full h-[55vh] mt-[15%]">
      <div className="mx-[3%] h-full flex justify-between ">
        <h1 className="content-end mb-[3%] text-8xl leading-[77px] select-none">
          WE <br /> MAKE <br />
          COOL <br />
          WEBSITES
        </h1>
        <div className="flex w-1/2 flex-col justify-between items-end">
          <img
            className="w-6 h-6 mt-[10%] mr-[10%]"
            src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/633495afcda694178a5243f6_Logo%20mark.svg"
          />
          <p className="w-[55%] pb-[5%]">
            Refokus is a forward-thinking web agency that combines Web Design,
            Webflow Development, and Creative Development to create cool
            websites that help brands position themselves as market leaders.
          </p>
          <div className="absolute top-0 w-full h-full">
            {images.map(
              (elem, index) =>
                elem.isActive && (
                  <img
                    key={index}
                    className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                    style={{ top: elem.top, left: elem.left }}
                    src={elem.url}
                    alt="work_images"
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
