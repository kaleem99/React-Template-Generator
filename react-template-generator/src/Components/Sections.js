import { connect } from "react-redux";
import WelcomePage from "../Pages/WelcomePage";
import TryItPage from "../Pages/TryItPage";
import Github from "../Pages/Github";
const Sections = ({ Sections }) => {
  let body = "";
  switch (Sections) {
    case "Welcome Page":
      body = <WelcomePage />;
      break;
    case "Try It Content":
      body = <TryItPage />;
      break;
    case "Github":
      body = <Github />;
      break;
    default:
      body = "";
  }

  return <div>{body}</div>;
};
const mapStateToProps = (state) => {
  return {
    Sections: state.sectionsReducer.Sections,
  };
};
export default connect(mapStateToProps, {})(Sections);
