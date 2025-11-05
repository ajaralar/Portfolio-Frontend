import classes from "./TechHeader.module.css";
import DownloadButton from "../DownloadButton/DownloadButton.jsx";
import HamburgerIcon from "../Icons/HamburgerIcon/HamburgerIcon.jsx";

const TechHeader = () => {
  return (
    <>
      <header>
        <p className={classes.text}>AJ</p>

        <DownloadButton href="/resume.pdf">
          Download CV
        </DownloadButton>

        <div className={classes.iconContainer}>
          <HamburgerIcon />
        </div>

      </header>
    </>
  );
};

export default TechHeader;
