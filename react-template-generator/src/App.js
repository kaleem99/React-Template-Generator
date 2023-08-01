import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Main";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchApiKey } from "./Redux/actions";
import BottomNavigation from "./Components/BottomNavigation";
function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
   try{
    dispatch(fetchApiKey());
   }catch(err){
    console.log(err)
   }
    // dispatch({ type: FETCH_API_KEY });
  }, []);
  return (
    <div className="App">
      <Header
        section={state.sectionsReducer.Sections}
        platform={state.platformReducer.Platform}
      />
      <Main state={state} />
      <BottomNavigation />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { APIKey: state.githubReducer.APIKey };
};

export default connect(mapStateToProps, {})(App);
