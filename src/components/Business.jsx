import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Explore Metaverse, CryptoCurrency, Blockchain, and Web 3.0<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The elements that constitute the meta-universe include a strong level of technology
        support 5G, VR, AR, a technical network carried by blockchain technology and a digital
        currency economic system with blockchain as a carrier. The meta-universe needs to
        include network arithmetic, artificial intelligence, gaming technology, manifestation technology
        and blockchain technology which guarantees the stability and transparency of the economic
        system through smart contracts and decentralized settlement platform to support together.
        Blockchain lays the foundation for the meta-universe economic system.
        Among the many elements that make up
        the metaverse, a fair economic system is considered to be the core that drives
        the operation of the metaverse, and blockchain plays an important role in it.
      </p>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      <img src="/metaverse.png" />
    </div>
  </section>
);

export default Business;
