import styles, { layout } from "../style.js";
import { card } from "../assets/index.js";
import Button from "./Button.jsx";

const CardDeal = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Find a better Card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        obcaecati, exercitationem ea voluptates ex, illo sapiente similique
        accusantium, ut laboriosam non? Porro qui quo cum dignissimos! Facere in
        iure quaerat!
      </p>
      <Button styles="mt-10"/>
    </div>
    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card" className="w-full h-full"/>
    </div>
  </section>
);

export default CardDeal;
