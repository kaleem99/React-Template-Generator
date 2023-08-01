import {
  EXPORT_TEMPLATE,
  FETCH_API_KEY,
  EXPORT_UPDATE_TEMPLATE,
  UPDATE_TEMPLATE,
} from "../actions";
const initialSTATE = {
  APIKey: "",
  githubData: [],
  fileContent: "100",
  popup: false,
};

const fetchGithubData = async (APIKey) => {
  const data = await fetch(
    "https://api.github.com/repos/kaleem99/React-Template-Canvas-Content/contents/",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${APIKey}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  const res = await data.json();
  return res;
};
const getDataAndExport = async (fileName, apiKey, content) => {
  // if (data !== null) {
  //   console.log(data.text);
  //   fetch("https://express-template-backend.onrender.com/templates", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ data: fetchedData.text, templateName: courseSection }),
  //   }).then((res) => console.log(res));
  //   console.log("Template Saved.");
  // } else {
  //   console.log("No Template saved");
  // }

  try {
    let base64Data = btoa(unescape(encodeURIComponent(content)));
    const responseResult = await fetch(
      `https://api.github.com/repos/kaleem99/React-Template-Canvas-Content/contents/${fileName}.html`,
      {
        method: "PUT",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${apiKey}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `{"message":"New File added","committer":{"name":"kaleem99","email":"kaleem99@github.com"},"content":"${base64Data}"}`,
      }
    );
    const responseMessage = await responseResult.json();
    console.log(responseMessage);
    if (
      responseMessage.message !== undefined &&
      responseMessage.message.includes("sha")
    ) {
      alert(
        responseMessage.message,
        "File already exists, please rename the file before adding a new one"
      );
    } else {
      alert("File has been uploaded successfully.");
    }
    console.log("API KEY Was retrieved successfully.");
  } catch (error) {
    console.error(error);
    alert(error);
  }
};
const updateGithubFile = async (fileContent, apiKey) => {
  try {
    const result = await fetch(
      `https://api.github.com/repos/kaleem99/React-Template-Canvas-Content/contents/${fileContent.name}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${apiKey}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          message: `updated file ${fileContent.name}`,
          content: fileContent.content,
          sha: fileContent.sha,
        }),
      }
    );
    alert("file content has been updated.");
  } catch (err) {
    alert(err);
  }
};
export const githubReducer = async (state = initialSTATE, action) => {
  switch (action.type) {
    case FETCH_API_KEY:
      const resultApiKey = action.payload;
      const newData = await fetchGithubData(resultApiKey);
      state.APIKey = resultApiKey;
      state.githubData = newData;
      return { ...state };
    case EXPORT_TEMPLATE:
      let result = await state;
      const { fileName, content } = action.payload;
      getDataAndExport(fileName, result.APIKey, content);
      const newResult = await fetchGithubData(result.APIKey);
      state.githubData = newResult;
      return { ...state, githubData: newResult };
    case EXPORT_UPDATE_TEMPLATE:
      const resultData = await state;
      updateGithubFile(action.payload, resultData.APIKey);
      return { ...state };
    default:
      return state;
  }
};
