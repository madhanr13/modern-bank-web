import styles from "../style";


const Button = ({styles}) => {
  return <button className={`px-6 py-4 bg-blue-gradient rounded-[10px] font-poppins font-medium text-[18px] text-primary outline-none ${styles} `} >Get Started</button>;
};

export default Button;
