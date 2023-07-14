import React from "react";
import LinkText from "../../UI/LinkText";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <LinkText title="Find an electrician" path="/electricians">
        To find the right electrician for your work Click on the button.
      </LinkText>
      <LinkText title="Create an electrician account" path="/electricians">
        To create an electrician account you will need to click on the button
        and if you have not registered on the site yet you will have to
        register.
      </LinkText>
    </div>
  );
}

export default Home;
