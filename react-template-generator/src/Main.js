import "./Main.scss";
import WelcomePage from "./Pages/WelcomePage";
import { Platforms } from "./constants";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  CHANGE_PLATFORM,
  EXPORT_TEMPLATE,
  EXPORT_TEMPLATE_POPUP,
  WELCOME_VIEW,
  WELCOME_SAVE,
  WELCOME_EDIT,
  TRY_IT_EDIT,
  TRY_IT_VIEW,
  TRY_IT_SAVE,
  NEXT_STEPS_EDIT,
  NEXT_STEPS_SAVE,
  NEXT_STEPS_VIEW,
  SELECT_PLATFORM,
} from "./Redux/actions";
import { Connect } from "react-redux";
import LogoImage from "./images/u-logo-placeholder-3-x.png";
import React, { useEffect, useState } from "react";
import MainNavigation from "./Components/MainNavigation";
import Sections from "./Components/Sections";
import Draggable from "react-draggable";
const Images = [
  "https://kaleem99.github.io/hostingContents/content/dist/img/edx.png",
  "https://kaleem99.github.io/hostingContents/content/dist/img/g.jpg",
  "https://www.instructure.com/sites/default/files/svg/2022-08/Canvas_Horizontal_ByInstructure_Color_RGB.svg",
];
function Main({
  Platform,
  popup,
  courseSection,
  APIKey,
  welcomePage,
  tryItPage,
  nextStepsPage,
  result,
  Select,
}) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const saveTemplate = async () => {
    if (input === "") {
      return alert("please name the file");
    }
    dispatch({
      type: EXPORT_TEMPLATE,
      payload: { fileName: input, content: result },
    });
  };
  let body = "";
  switch (Platform) {
    case "edX":
    case "Try-Its":
    case "Canvas":
    case "Github":
    case "General":
    case "Degree":
    case "Executive Education":
    case "Bootcamp":
    case "Micro-Degree":
      body = <Sections />;
      break;
    default:
      body = (
        <div>
          <h1 className="MainPageHeading">Content Designer</h1>
          <div className="platform-Container">
            {Platforms.map(
              (data, i) =>
                i !== 3 && (
                  <button
                    onClick={() =>
                      dispatch({ type: SELECT_PLATFORM, payload: data })
                    }
                    id={Select === data ? "selectBtn" : ""}
                    className={"platform-Items"}
                  >
                    <img
                      width={i < 4 ? "160px" : "85px"}
                      height={"85px"}
                      style={{
                        position: "relative",
                        top: "15px",
                        left: 0,
                        right: 0,
                        margin: "auto",
                      }}
                      alt=""
                      src={i < 4 ? Images[i] : LogoImage}
                    />
                    <h2 className="TemplateName">{data}</h2>
                  </button>
                )
            )}
          </div>
        </div>
      );
      break;
  }
  console.log(popup);
  return (
    <div
      className="Main"
      style={Platform === "" ? { display: "block" } : { display: "grid" }}
    >
      {Platform !== "" && <MainNavigation />}
      {popup && (
        <Draggable>
          <div className="ExportPopupFile">
            <h1>Export File To {Platform}</h1>
            <label>Please Name the File</label>
            <br></br>
            <input
              onChange={(e) => setInput(e.target.value)}
              placeholder="fileName"
              className="fileInput"
            />
            <div className="MainSaveAndCancelDiv">
              <button
                className="MainSaveAndCancel"
                onClick={() =>
                  dispatch({ type: EXPORT_TEMPLATE_POPUP, payload: false })
                }
              >
                Cancel
              </button>
              <button
                className="MainSaveAndCancel"
                onClick={async () => saveTemplate()}
              >
                Save
              </button>
            </div>
          </div>
        </Draggable>
      )}
      <div
        style={Platform === "" ? { margin: "auto" } : {}}
        className="MainInnerContent"
      >
        {body}
      </div>
      {Platform === "" && (
        <div className="MainBottomSelect">
          <div className="MainBottomButtons">
            <button
              className="btnCancel"
              onClick={() => dispatch({ type: SELECT_PLATFORM, payload: "" })}
            >
              Cancel
            </button>
            <button
              className="btnSelect"
              onClick={() =>
                dispatch({ type: CHANGE_PLATFORM, payload: Select })
              }
            >
              Select
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    Platform: state.platformReducer.Platform,
    popup: state.contentReducer.popup,
    courseSection: state.sectionsReducer.Sections,
    APIKey: state.githubReducer.APIKey,
    welcomePage: state.welcomePageReducer,
    tryItPage: state.tryItContentReducer,
    nextStepsPage: state.nextStepsReducer,
    result: state.saveAndViewReducer.result,
    Select: state.platformReducer.Select,
  };
};
export default connect(mapStateToProps, {})(Main);
