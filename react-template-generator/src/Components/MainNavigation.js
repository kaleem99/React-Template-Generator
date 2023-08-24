import { connect, useDispatch } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons
import { useState } from "react";
import { MdOutlineArrowDropDown, MdArrowLeft } from "react-icons/md";
import rightArrow from "../images/rightArrow.svg";
import leftArrow from "../images/leftArrow.svg";

import {
  CHANGE_PLATFORM,
  CHANGE_SECTION,
  MENU_OPEN_CLOSE,
  TEMPLATES_DROPDOWN,
  BUILD_RESOURCES_DROPDOWN,
  SEARCH_BAR,
  CHANGE_VIEW_TO_FALSE,
  FILTER_GITHUB_FILES,
} from "../Redux/actions";
import { SubSections, Platforms } from "../constants";

function MainNavigation({
  mainNavigationOpenClose,
  Platform,
  Sections,
  templateDropDown,
  buildResourcesDropDown,
  searchBar,
}) {
  const dispatch = useDispatch();

  // MdOutlineArrowDropDown
  if (mainNavigationOpenClose === true) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
        <div className="MainNavigation">
          <div className="menuIconAndSearchIcon">
            <div className="DivButtonMenu">
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
            <div
              className="searchBarIcon"
              style={
                !searchBar
                  ? { marginLeft: "auto", marginRight: "0px", width: "20%" }
                  : {}
              }
            >
              <div className="search-icon">
                {searchBar && (
                  <input
                    className="input-search"
                    type="text"
                    placeholder="Search"
                    onChange={(e) =>
                      dispatch({
                        type: FILTER_GITHUB_FILES,
                        payload: e.target.value.toLowerCase(),
                      })
                    }
                  />
                )}
              </div>

              <div
                className="search-icon icon-search"
                onClick={() =>
                  dispatch({ type: SEARCH_BAR, payload: !searchBar })
                }
              >
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="TemplatesDiv">
            <div className="NavIconAndTabName">
              <h3 className="MainTitles">Templates</h3>
              <div
                className="dropDownIcon"
                onClick={() =>
                  dispatch({
                    type: TEMPLATES_DROPDOWN,
                    payload: !templateDropDown,
                  })
                }
              >
                {templateDropDown ? (
                  <MdOutlineArrowDropDown />
                ) : (
                  <MdArrowLeft />
                )}
              </div>
            </div>
            {templateDropDown &&
              Platform !== "" &&
              SubSections.map((item, i) => (
                <div className="radioBtnSections">
                  <input
                    type="radio"
                    checked={Sections === item ? true : false}
                  />
                  <button
                    style={Sections === item ? { fontWeight: "bold" } : {}}
                    id="SectionButtons"
                    onClick={() => {
                      dispatch({ type: CHANGE_SECTION, payload: item });
                      dispatch({ type: CHANGE_VIEW_TO_FALSE });
                    }}
                  >
                    {item}
                  </button>
                </div>
              ))}
          </div>
          <br></br>
          <div className="TemplatesDiv">
            <div className="NavIconAndTabName">
              <h3 className="MainTitles">Build Resources</h3>
              <div
                className="dropDownIcon"
                onClick={() =>
                  dispatch({
                    type: BUILD_RESOURCES_DROPDOWN,
                    payload: !buildResourcesDropDown,
                  })
                }
              >
                {buildResourcesDropDown ? (
                  <MdOutlineArrowDropDown />
                ) : (
                  <MdArrowLeft />
                )}
              </div>
            </div>
            {buildResourcesDropDown &&
              Platform !== "" &&
              Platforms.map((item, i) => (
                <div className="radioBtnSections">
                  <input
                    type="radio"
                    checked={Platform === item ? true : false}
                  />
                  <button
                    style={Platform === item ? { fontWeight: "bold" } : {}}
                    id="SectionButtons"
                    onClick={() =>
                      dispatch({ type: CHANGE_PLATFORM, payload: item })
                    }
                  >
                    {item}
                  </button>
                </div>
              ))}
          </div>
        </div>
        <div style={{ width: "50px", marginTop: "-20px" }}>
          <div
            style={{
              width: "50px",
              height: "70px",
              marginTop: "0px",
              backgroundColor: "#F2F2F2",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() =>
              dispatch({
                type: MENU_OPEN_CLOSE,
                payload: !mainNavigationOpenClose,
              })
            }
          >
            <img
              width={"50px"}
              style={{ marginTop: "10px" }}
              src={leftArrow}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "90px auto" }}>
      <div className="MainNavigationClose">
        <div
          style={{ gridTemplateColumns: "none" }}
          className="menuIconAndSearchIcon"
        >
          <div className="DivButtonMenu">
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
        </div>
      </div>
      <div style={{ width: "50px", marginTop: "-20px" }}>
        <div
          style={{
            width: "50px",
            height: "70px",
            marginTop: "0px",
            backgroundColor: "#F2F2F2",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() =>
            dispatch({
              type: MENU_OPEN_CLOSE,
              payload: !mainNavigationOpenClose,
            })
          }
        >
          <img
            width={"50px"}
            style={{ marginTop: "10px" }}
            src={rightArrow}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    mainNavigationOpenClose: state.mainNavigationReducer.menuOpenOrClose,
    Platform: state.platformReducer.Platform,
    Sections: state.sectionsReducer.Sections,
    templateDropDown: state.mainNavigationReducer.templates,
    buildResourcesDropDown: state.mainNavigationReducer.buildResources,
    searchBar: state.mainNavigationReducer.searchBar,
  };
};
export default connect(mapStateToProps, {})(MainNavigation);
