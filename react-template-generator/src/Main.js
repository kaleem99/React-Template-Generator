import "./Main.scss";
import WelcomePage from "./Pages/WelcomePage";
import { Platforms } from "./constants";
import { useSelector, useDispatch, connect } from "react-redux";
import { CHANGE_PLATFORM } from "./Redux/actions";
import { Connect } from "react-redux";
import MainNavigation from "./Components/MainNavigation";
import Sections from "./Components/Sections";
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
      console.log(Platform);
      body = (
        <div>
          <h1>Template Generator</h1>
          <div className="platform-Container">
            {Platforms.map((data) => (
              <button
                onClick={() =>
                  dispatch({ type: CHANGE_PLATFORM, payload: data })
                }
                className="platform-Items"
              >
                <h2>{data}</h2>
              </button>
            ))}
          </div>
        </div>
      );
      break;
  }
  return (
    <div className="Main">
      <MainNavigation/>
      <div className="MainInnerContent">{body}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { Platform: state.platformReducer.Platform };
};
export default connect(mapStateToProps, {})(Main);
