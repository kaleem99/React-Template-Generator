import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import "./BottomNavigation.scss";
import {
  CHANGE_FILE_CONTENT,
  WELCOME_SAVE,
  WELCOME_VIEW,
  WELCOME_EDIT,
  TRY_IT_EDIT,
  TRY_IT_SAVE,
  TRY_IT_VIEW,
  NEXT_STEPS_EDIT,
  NEXT_STEPS_SAVE,
  NEXT_STEPS_VIEW,
} from "../Redux/actions";
function BottomNavigation({
  fileContent,
  platform,
  welcomePage,
  view,
  section,
  tryItPage,
  nextStepsPage,
}) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState([
    { value: false },
    { value: false },
  ]);
  const handleMouseOver = (e) => {
    console.log(e.target.name);
    // setIsHovered(true);
    const newData = [...isHovered];
    console.log(newData[e.target.name]);
    newData[e.target.name].value = true;
    setIsHovered(newData);
  };

  const handleMouseLeave = (e) => {
    console.log(e.target.name);
    const newData = [...isHovered];
    newData[e.target.name].value = false;
    setIsHovered(newData);
    // setIsHovered(false);
  };
  console.log(section);
  const handleSection = () => {
    switch (section) {
      case "Welcome Page":
        return {
          VIEW: WELCOME_VIEW,
          EDIT: WELCOME_EDIT,
          SAVE: WELCOME_SAVE,
          FUNCTION: welcomePage,
        };
      case "Try It Content":
        return {
          VIEW: TRY_IT_VIEW,
          EDIT: TRY_IT_EDIT,
          SAVE: TRY_IT_SAVE,
          FUNCTION: tryItPage,
        };
      case "Next Steps":
        console.log(100);
        return {
          VIEW: NEXT_STEPS_VIEW,
          EDIT: NEXT_STEPS_EDIT,
          SAVE: NEXT_STEPS_SAVE,
          FUNCTION: nextStepsPage,
        };
      default:
        return { VIEW: "", EDIT: "", SAVE: "" };
    }
  };
  const { EDIT, VIEW, SAVE, FUNCTION } = handleSection();
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#173462",
        margin: "auto",
      }}
    >
      {fileContent !== "" && (
        <>
          {" "}
          <button
            onClick={() => dispatch({ type: CHANGE_FILE_CONTENT, payload: "" })}
            style={{
              width: "120px",

              height: "40px",
              marginTop: "10px",
              marginBottom: "auto",
              marginLeft: "100px",
              borderRadius: "5px",
              border: "1px solid",
            }}
            className="btn"
          >
            Back
          </button>
          <button
            // onClick={() => updateGithubFile()}
            style={{
              width: "120px",
              height: "40px",
              marginTop: "10px",
              marginBottom: "auto",
              marginLeft: "100px",
              borderRadius: "5px",
              border: "1px solid",
            }}
            className="btn"
          >
            Update Template
          </button>
        </>
      )}
      {platform !== "" && (
        <>
          {" "}
          <span id="TextCopied">
            <p>Template saved</p>
          </span>
          <button
            onClick={() => {
              dispatch({ type: SAVE, payload: FUNCTION });
              let element = document.getElementById("TextCopied");
              element.style.display = "block";
              setTimeout(() => {
                element.style.display = "none";
              }, 2000);
            }}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            name="0"
            style={{
              backgroundColor: isHovered[0].value
                ? "rgb(61, 118, 212)"
                : "white",
              color: isHovered[0].value ? "white" : "black",
            }}
            className="btnSaveAndView"
          >
            Save Template
          </button>
          <button
            name="1"
            onClick={() =>
              !view ? dispatch({ type: VIEW }) : dispatch({ type: EDIT })
            }
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: isHovered[1].value
                ? "rgb(61, 118, 212)"
                : "white",
              color: isHovered[1].value ? "white" : "black",
            }}
            className="btnSaveAndView"
          >
            {!view ? "View Template" : "Edit Template"}
          </button>
        </>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    fileContent: state.contentReducer.fileContent,
    platform: state.platformReducer.Platform,
    welcomePage: state.welcomePageReducer,
    view: state.saveAndViewReducer.view,
    section: state.sectionsReducer.Sections,
    tryItPage: state.tryItContentReducer,
    nextStepsPage: state.nextStepsReducer,
  };
};
export default connect(mapStateToProps, {})(BottomNavigation);
