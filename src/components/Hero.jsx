import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Web 3.0</span>
            <span className="text-white">, Cryptocurrency</span>
            <span className="text-white">, Blockchain</span>
            <span className="text-white">, Metaverse, and more.</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Technologies.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          2022 is a significant year for blockchain and cryptocurrencies. From meme tokens to bull markets and NFTs,
          the industry continues to be a hot topic of conversation. Our team is actively exploring a trend: the meta-universe.
          The metaverse aims to combine our real-world social life, work and immersive technology to capture the imagination of the masses.
          While the metaverse is still in its early stages, cryptocurrencies are already starting to play a central role. As we explore,
          we will gain insight into some of the blockchain projects that will help make this new digital future a reality,
          and provide users with relevant technology services and support. Although the metaverse is still in its early stages,
          cryptocurrencies are already starting to play a central role. We will continue to practice and develop technical support to help
          realize this new digital future of blockchain projects.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className=" relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
