import classes from "./TechFooter.module.css";

const TechFooter = ({ footerData }) => {
  return (
    <footer>
      <div className={classes.mainContainer}>

        <div className={classes.imageSection}>

        </div>

        <div className={classes.section}>

          <div className={classes.containerOne}>
            <p className={classes.title}>INQUIRIES? <span className={classes.titleSpan}>GET IN TOUCH</span></p>
            <p className={classes.details}>{footerData.email}</p>
            <p className={classes.details}>{footerData.phone}</p>
          </div>

          <div className={classes.containerTwo}>
            <p className={classes.body}>{footerData.body}</p>
            <div className={classes.divider}></div>
            <div className={classes.socialsContainer}>
              {footerData.socialLinks.map((link, index) => (
                <a href={link.url} key={index} className={classes.link}>{link.name}</a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default TechFooter;
