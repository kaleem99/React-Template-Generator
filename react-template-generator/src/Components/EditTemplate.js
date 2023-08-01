import { batch, useDispatch } from "react-redux";
import { UPDATE_TEMPLATE, CHANGE_FILE_CONTENT } from "../Redux/actions";
const EditTemplate = ({
  fileContent,

  apiKey,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        id="EditGithubContent"
        style={{
          width: "90%",
          height: "80vh",
          margin: "auto",
          //   border: "1px solid",
          overflow: "scroll",
        }}
        dangerouslySetInnerHTML={{ __html: atob(fileContent.content) }}
        contentEditable={true}
        onKeyDown={(e) => {
          dispatch({
            type: UPDATE_TEMPLATE,
            payload: e.currentTarget.innerHTML,
          });
          console.log(e.currentTarget.innerHTML)
          // let btoaContent = btoa(e.currentTarget.innerHTML);
          // dispatch({
          //   type: CHANGE_FILE_CONTENT,
          //   payload: btoaContent,
          // });
          // console.log(btoa(e.currentTarget.innerHTML));
        }}
      ></div>
    </>
  );
};

export default EditTemplate;
