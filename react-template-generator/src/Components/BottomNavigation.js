import { connect, useDispatch } from "react-redux";
import { CHANGE_FILE_CONTENT } from "../Redux/actions";
function BottomNavigation({ fileContent }) {
  const dispatch = useDispatch();
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
              // paddingLeft: "15px",
              // paddingRight: "15px",
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
              // paddingLeft: "15px",
              // paddingRight: "15px",
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
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    fileContent: state.contentReducer.fileContent,
  };
};
export default connect(mapStateToProps, {})(BottomNavigation);
