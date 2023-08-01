import EditTemplate from "../Components/EditTemplate";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import "./Github.scss";
import { CHANGE_FILE_CONTENT } from "../Redux/actions";
function ViewGithubContent({ data, fileContent, githubFiles }) {
  const [githubData, setGithubData] = useState([]);
  //   const [fileContent, setFileContent] = useState("");
  const [updated, setUpdated] = useState("");
  const [apiKey, setApiKey] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const setData = async () => {
      const result = await data.then((res) => res);
      setGithubData(result.githubData);
      setApiKey(result.APIKey);
    };
    setData();
  }, []);
  const fetchFileContent = async (e) => {
    const newData = await fetch(
      `https://api.github.com/repos/kaleem99/React-Template-Canvas-Content/contents/${e.target.value}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${apiKey}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    let result = await newData.json();
    console.log(result, "result".repeat(20));
    // setFileContent(result);
    dispatch({ type: CHANGE_FILE_CONTENT, payload: result });
  };

  return fileContent === "" ? (
    <div className="GithubPage">
      <div className="GithubContent">
        {githubData != undefined &&
          githubData.length > 0 &&
          githubData
            .filter(
              (data) => data.name.toLowerCase().includes(githubFiles) && data
            )
            .map((data) => {
              return (
                <div className="GithubItem">
                  <h3>File Name: {data.name}</h3>
                  <p> Hosted Link:</p>
                  <p className="githubLink">
                    <a
                      target="_blank"
                      href={`https://kaleem99.github.io/React-Template-Canvas-Content/${data.name}`}
                    >
                      https://kaleem99.github.io/React-Template-Canvas-Content/
                      {data.name}
                    </a>
                  </p>
                  <button
                    className="btnEditContent"
                    value={data.name}
                    onClick={(e) => fetchFileContent(e)}
                  >
                    Edit HTML
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  ) : (
    <EditTemplate
      updated={updated}
      fileContent={fileContent}
      setUpdated={setUpdated}
      apiKey={apiKey}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.githubReducer,
    fileContent: state.contentReducer.fileContent,
    githubFiles: state.contentReducer.githubFiles,
  };
};
export default connect(mapStateToProps, {})(ViewGithubContent);
