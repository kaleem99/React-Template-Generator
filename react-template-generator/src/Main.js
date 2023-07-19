import "./Main.scss";
import WelcomePage from "./Pages/WelcomePage";
import { Platforms } from "./constants";
import { useSelector, useDispatch, connect } from "react-redux";
import { CHANGE_PLATFORM } from "./Redux/actions";
import { Connect } from "react-redux";
import MainNavigation from "./Components/MainNavigation";
import Sections from "./Components/Sections";
const Images = [
  "https://kaleem99.github.io/hostingContents/content/dist/img/edx.png",
  "https://kaleem99.github.io/hostingContents/content/dist/img/g.jpg",
  "https://www.instructure.com/sites/default/files/svg/2022-08/Canvas_Horizontal_ByInstructure_Color_RGB.svg",
];
function Main({ Platform }) {
  let body = "";
  const dispatch = useDispatch();
  switch (Platform) {
    case "edX":
    case "Try Its":
    case "Canvas":
      body = <Sections />;
      break;
    default:
      body = (
        <div>
          <h1>Template Generator</h1>
          <div className="platform-Container">
            {Platforms.map((data, i) => (
              <button
                onClick={() =>
                  dispatch({ type: CHANGE_PLATFORM, payload: data })
                }
                className="platform-Items"
              >
                <img width={"100%"} height={"60%"} alt="" src={Images[i]} />
                <h2 className="TemplateName">{data}</h2>
              </button>
            ))}
          </div>
        </div>
      );
      break;
  }
  return (
    <div
      className="Main"
      style={Platform === "" ? { display: "block" } : { display: "grid" }}
    >
      {Platform !== "" && <MainNavigation />}
      <div className="MainInnerContent">{body}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { Platform: state.platformReducer.Platform };
};
export default connect(mapStateToProps, {})(Main);
