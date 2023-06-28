import { FETCH_API_KEY, FETCH_GITHUB_DATA } from "../actions";
const initialSTATE = { APIKey: "", githubData: [], fileContent: "" };

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

export const githubReducer = async (state = initialSTATE, action) => {
  switch (action.type) {
    case FETCH_API_KEY:
      const resultApiKey = action.payload;
      const newData = await fetchGithubData(resultApiKey);
      console.log(newData);
      return { ...state, APIKey: resultApiKey, githubData: newData };
    // case FETCH_GITHUB_DATA:
    //   state.githubData = action.payload;
    //   console.log(state);
    //   return { ...state };
    default:
      return state;
  }
};
