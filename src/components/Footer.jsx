import styles from "../style";
import { logo } from "../assets";
import { linkedin } from "../assets";
import { github } from "../assets";

const socialMedia = [
  { id: 1, icon: linkedin, link: "https://www.linkedin.com/in/krystalzhang612/" },
  { id: 2, icon: github, link: "https://github.com/KrystalZhang612" }
];

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="kdev"
          className="w-[266px] h-[72.14px] object-contain"
        />
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 KDev Ltd. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">

        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[70px] h-[70px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
