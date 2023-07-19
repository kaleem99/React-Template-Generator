import { connect, useDispatch } from "react-redux";
import { IoMenu } from "react-icons/io5";
import {
  CHANGE_PLATFORM,
  CHANGE_SECTION,
  MENU_OPEN_CLOSE,
} from "../Redux/actions";
import { SubSections, Platforms } from "../constants";
function MainNavigation({ mainNavigationOpenClose, Platform, Sections }) {
  const dispatch = useDispatch();
  if (mainNavigationOpenClose === true) {
    return (
      <div className="MainNavigation">
        <button
          onClick={() =>
            dispatch({
              type: MENU_OPEN_CLOSE,
              payload: !mainNavigationOpenClose,
            })
          }
          className="ButtonMenu"
        >
          <IoMenu />
        </button>
        <h3 className="MainTitles">Sections</h3>
        {Platform !== "" &&
          SubSections.map((item, i) => (
            <button
              style={
                Sections === item
                  ? { background: "#3D76D4", color: "white" }
                  : {}
              }
              id="SectionButtons"
              onClick={() => dispatch({ type: CHANGE_SECTION, payload: item })}
            >
              {item}
            </button>
          ))}
        <br></br>
        <h3 className="MainTitles">Platforms</h3>
        {Platform !== "" &&
          Platforms.map((item, i) => (
            <button
              style={
                Platform === item
                  ? { background: "#3D76D4", color: "white" }
                  : {}
              }
              id="SectionButtons"
              onClick={() => dispatch({ type: CHANGE_PLATFORM, payload: item })}
            >
              {item}
            </button>
          ))}
      </div>
    );
  }
  return (
    <div className="MainNavigationClose">
      <button
        onClick={() =>
          dispatch({
            type: MENU_OPEN_CLOSE,
            payload: !mainNavigationOpenClose,
          })
        }
        className="ButtonMenu"
      >
        <IoMenu />
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    mainNavigationOpenClose: state.mainNavigationReducer.menuOpenOrClose,
    Platform: state.platformReducer.Platform,
    Sections: state.sectionsReducer.Sections,
  };
};
export default connect(mapStateToProps, {})(MainNavigation);