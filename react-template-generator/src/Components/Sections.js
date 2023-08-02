import { connect } from "react-redux";
import "./Sections.scss";
import WelcomePage from "../Pages/WelcomePage";
import TryItPage from "../Pages/TryItPage";
import Github from "../Pages/Github";
import NextSteps from "../Pages/NextSteps";
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
    case "Next Steps":
      body = <NextSteps />;
      break;
    default:
      body = <h1 className="SelectATemplate">Select A Template</h1>;
  }

  return <div className="SectionContent">{body}</div>;
};
const mapStateToProps = (state) => {
  return {
    Sections: state.sectionsReducer.Sections,
  };
};
export default connect(mapStateToProps, {})(Sections);
