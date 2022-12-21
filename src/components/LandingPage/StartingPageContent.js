import { AuthContext } from "../../context";
import { useContext } from "react";
import "./StartingPageContent.css";

const StartingPageContent = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <section className="starting">
      <h1>
        {isLoggedIn
          ? "Welcome User ! You are now logged In"
          : "Welcome ! Please login in to access the application"}{" "}
      </h1>
    </section>
  );
};

export default StartingPageContent;
