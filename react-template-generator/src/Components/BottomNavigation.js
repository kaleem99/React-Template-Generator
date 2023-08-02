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
  EXPORT_TEMPLATE,
  EXPORT_TEMPLATE_POPUP,
  UPDATE_TEMPLATE,
  EXPORT_UPDATE_TEMPLATE,
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
      {section !== "Github" && platform !== "" && (
        <>
          <span id="TextCopied">
            <p>Template saved</p>
          </span>
          {view ? (
            <>
              <button
                onClick={() => {
                  dispatch({ type: EXPORT_TEMPLATE_POPUP, payload: true });
                }}
                className="btnSaveAndView"
              >
                Export Template
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector(".SectionContent");
                  // Create a fake `textarea` and set the contents to the text
                  // you want to copy
                  const storage = document.createElement("textarea");
                  storage.value = element.innerHTML;
                  element.appendChild(storage);

                  // Copy the text in the fake `textarea` and remove the `textarea`
                  storage.select();
                  storage.setSelectionRange(0, 99999);
                  document.execCommand("copy");
                  element.removeChild(storage);
                }}
                className="btnSaveAndView"
              >
                Copy HTML
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                dispatch({ type: SAVE, payload: FUNCTION });
              }}
              className="btnSaveAndView"
            >
              Save Template
            </button>
          )}
          {fileContent !== "" ? (
            <button
              className="btnSaveAndView"
              onClick={() =>
                dispatch({ type: CHANGE_FILE_CONTENT, payload: "" })
              }
            >
              Back
            </button>
          ) : (
            <button
              onClick={() =>
                !view ? dispatch({ type: VIEW }) : dispatch({ type: EDIT })
              }
              className="btnSaveAndView"
            >
              {!view ? "View Template" : "Edit Template"}
            </button>
          )}
        </>
      )}
      {section === "Github" && fileContent !== "" && (
        <>
          <button
            onClick={() => {
              dispatch({ type: EXPORT_UPDATE_TEMPLATE, payload: fileContent });
            }}
            className="btnSaveAndView"
          >
            Update
          </button>
          <button
            className="btnSaveAndView"
            onClick={() => dispatch({ type: CHANGE_FILE_CONTENT, payload: "" })}
          >
            Back
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
