import { motion } from "framer-motion";
import React from "react";

function Box() {
  const box = [
    {
      logo: "src/assets/ARQITEL.png",
      image1:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp",
      image2:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14-p-1080.webp",
      video:
        "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
      p: "Concept, Design, 3D, Webflow+WebGL Development",
      h3: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      bg: "#5355EE",
    },
    {
      logo: "src/assets/CULA.png",
      image1:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png",
      image2:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
      video: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
      p: "Concept, Design, 3D, Webflow+WebGL Development",
      h3: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      bg: "#4A576B",
    },
    {
      logo: "src/assets/Webflow.png",
      image1:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-1080.webp",
      image2:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1)-p-1080.webp",
      video:
        "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
      p: "Concept, Design, Webflow Development",
      h3: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      bg: "#1626F3",
    },
    // {
    //   logo: "src/assets/Refokus.png",
    //   image1:
    //     "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg",
    //   image2:
    //     "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10-p-1080.jpg",
    //   video:
    //     "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
    //   p: "Concept, Design, 3D, Webflow+WebGL Development, AI Integrations",
    //   h3: "We've created an interactive site using generative AI to allow users to engage with our thinking about AI, industry trends and design.",
    //   bg: "#3E4365",
    // },
    // {
    //   logo: "src/assets/MANIV.png",
    //   image1:
    //     "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202.png",
    //   image2:
    //     "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png",
    //   video: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
    //   p: "Branding, Design, Webflow+GSAP Development",
    //   h3: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    //   bg: "#2DCB76",
    // },
    // {
    //   logo: "src/assets/SILVR.png",
    //   image1:
    //     "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01.jpg",
    //   image2:
    //     "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02-p-1080.jpg",
    //   video: "https://cdn.refokus.com/website/2022/videos/Silvr.webm",
    //   p: "Design, Webflow Development",
    //   h3: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
    //   bg: "#FF7548",
    // },
  ];

  const handleClick = () => {
    window.location.href = "https://example.com"; // Replace with the URL you want to visit
  };

  return (
    <div className="w-full min-h-[850px] px-[3%] flex flex-col gap-[70px] mt-[5%]">
      {box.map((b, i) => (
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            viewport={{ once: true }}
          key={i}
          className="w-full h-full rounded-3xl flex justify-between"
          style={{ backgroundColor: b.bg }}
        >
          <div className="w-1/2 flex flex-col gap-[7%] p-[3%]">
            <img className="w-[35%]" src={b.logo} alt="Logo" />
            <img
              alt="Image 1"
              className="w-[70%] h-[31%] object-cover rounded-2xl self-end mt-[5%]"
              src={b.image1}
            />
            <img
              alt="Image 2"
              className="w-[100%] h-[42%] object-cover rounded-2xl"
              src={b.image2}
            />
          </div>
          <div className="w-1/2 py-[3%] flex flex-col gap-[5%]">
            <video
              muted
              autoPlay
              loop
              className="w-[95%] rounded-xl object-cover"
              src={b.video}
            />
            <p>{b.p}</p>
            <h3 className="text-xl font-semibold w-[90%]">{b.h3}</h3>
            {/* <Button name="Visit Website" onClick={handleClick} /> */}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Box;
