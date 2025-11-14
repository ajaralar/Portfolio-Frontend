import classes from "./TechFooter.module.css";

const TechFooter = ({ footerData }) => {
  return (
    <>
      <footer>
        {footerData.copyright}
      </footer>
    </>
  );
};

export default TechFooter;
