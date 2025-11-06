import classes from "./TechHeader.module.css";
import DownloadButton from "../DownloadButton/DownloadButton.jsx";

const TechHeader = () => {
  return (
    <>
      <header>
        <p className={classes.text}>AJ</p>

        <DownloadButton href="/resume.pdf">
          Download CV
        </DownloadButton>
      </header>
    </>
  );
};

export default TechHeader;
