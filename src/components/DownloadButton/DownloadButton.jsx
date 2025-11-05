import classes from "./DownloadButton.module.css";

const DownloadButton = ({ href, children }) => {
  return (
    <a
      href={href}
      className={classes.resumeButton}
      download="Best-Candidate.pdf"
    >
      {children}
    </a>
  );
};

export default DownloadButton;
