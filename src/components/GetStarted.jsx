import styles from "../style";
import { arrowUp } from "../assets/index.js";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins text-[18px] leading-[23px] mr-1">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain "
        />
      </div>
      <p className="font-poppins text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
