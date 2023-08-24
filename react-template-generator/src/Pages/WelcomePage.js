import Draggable from "react-draggable";
import { IoIosCloseCircle } from "react-icons/io";
import { connect, useDispatch } from "react-redux";
import "./WelcomePage.scss";
import { WELCOME_PAGE_ONCHANGE } from "../Redux/actions";
import imageLOGO1 from "../images/icon-bg.svg";
import imageLogo2 from "../images/objectives-1.svg";
const options = [
  {
    value:
      "https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg",
    label: "GetSmarter",
  },
  {
    value:
      "https://drive.google.com/file/d/1QNtq_MREdN9Unbe8EaW87C4C6OBXKfK6/view",
    label: "Arizona State University",
  },
  { value: "1w_CjyVhgxVH8FdbKRYj0-JZkL-OAiwmo", label: "Name 3" },
  { value: "1xtY377CeY8Kz-KbIOSNC6caENdcvtrWm", label: "Name 4" },
  { value: "1CMgy1VfQYIF2BQh__ApcHGDZvFscpqtD", label: "Name 5" },
  { value: "1o1pUhn6s5v-br-gaLfTuM-f6hzI96Jcn", label: "Name 6" },
  { value: "1emj1ZfCoC6QnzCsgRBB19XyiLbh4Y1VH", label: "Name 7" },
  { value: "1ZKDGr2c200xseqpIzWTDmQVFFaVBgP-T", label: "Name 8" },
  { value: "1oK0ahEcMw7S8wn14Hs2qyu41NbTy7ZvM", label: "Name 9" },
  { value: "1NUmuuvhRuoTHD4pMEZmC6uVXaNy5NihE", label: "Name 10" },
  { value: "1SbedZsRamCGb3F-mLaW48-TRQfb_OnRi", label: "Name 11" },
  { value: "1RdXuhPk6v37uoCJbyfNRFts2HhrDY53v", label: "Name 12" },
  { value: "1YPFwguudKlY7rR0EqkJ9jMvSjbLFVIbY", label: "Name 13" },
  { value: "1rX4p9hKxQzTGIlHpJ4vEP_mLMZ1dbdJ8", label: "Name 14" },
  { value: "1wyJwe-zu5y9heY9rRjE_2q40qE8_I6rq", label: "Name 15" },
];

function WelcomePage({
  imageSelect,
  setImageSelect,
  image,
  state,
  view,
  result,
}) {
  console.log(state);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value, innerHTML, className } = event.target;
    console.log(innerHTML, className);
    if (className === "input3") {
      dispatch({
        type: WELCOME_PAGE_ONCHANGE,
        payload: { name: className, value: innerHTML },
      });
    } else {
      dispatch({ type: WELCOME_PAGE_ONCHANGE, payload: { name, value } });
    }
  };
  const selectUPLogo = () => {
    return (
      <Draggable>
        <div
          style={{
            position: "absolute",
            right: 0,
            left: 0,
            margin: "auto",
            width: "300px",
            height: "100px",
            border: "1px solid",
            borderRadius: "5px",
            textAlign: "center",
            padding: "10px",
            background: "white",
          }}
          // onDoubleClick={() => setImageSelect(false)}
        >
          <p
            style={{
              position: "absolute",
              top: "-25px",
              right: "1px",
              fontSize: "25px",
            }}
            // onClick={() => setImageSelect(false)}
          >
            <IoIosCloseCircle />
          </p>
          <h3>Select University Partner Logo</h3>
          <select
            // onChange={(e) => setImage(e.target.value)}
            style={{ width: "200px", height: "40px" }}
          >
            {options.map((data) => (
              <option value={data.value}>{data.label}</option>
            ))}
          </select>
        </div>
      </Draggable>
    );
  };
  if (!view) {
    return (
      <>
        {imageSelect && selectUPLogo()}
        <div
          className="Welcome PageDiv"
          style={{
            width: "974px",
            height: "auto",
            padding: "20px",
            // border: "1px solid",
            textAlign: "left",
            margin: "0% auto",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
            <div style={{ width: "720px" }}>
              <h1 style={{ color: "#002D58" }}>Welcome to the course</h1>
              <p>
                Thank you for joining this Try It course. This course is a
                portion of a module in the full{" "}
                <input
                  style={{ width: "180px", height: "30px" }}
                  placeholder="[insert UP name]"
                  name="input1"
                  value={state.input1}
                  onChange={handleChange}
                />{" "}
                <input
                  style={{ width: "180px", height: "30px" }}
                  placeholder="[insert Executive Education course name]"
                  name="input2"
                  value={state.input2}
                  onChange={handleChange}
                />{" "}
                course.
              </p>
            </div>
            <img
              style={{ position: "relative", width: "250px", right: "10px" }}
              src="https://mma.prnewswire.com/media/1281773/GetSmarter_Logo.jpg?p=facebook"
            ></img>

            <div>
              <img onDoubleClick={() => setImageSelect(true)} src={image}></img>
            </div>
          </div>
          <div className="LearningOutcomesSection">
            After completing this Try It course, you'll be able to:
            <div className="LearningOutcomesParent">
              <div className="LearningOutcomesTextBox">
                <img
                  style={{ position: "relative", top: "-10px", left: "-2px" }}
                  src={imageLOGO1}
                  alt="React Logo"
                />
                <img
                  style={{
                    position: "relative",
                    top: "-12px",
                    marginLeft: "-54px",
                  }}
                  src={imageLogo2}
                  alt="React Logo"
                />
                <div
                  style={{
                    position: "relative",
                    top: "-70px",
                    left: "66px ",
                  }}
                >
                  <p className="LearningOutcomesText"> Learning outcomes</p>
                </div>
              </div>

              <div className="LearningOutcomesOuter">
                <div
                  style={{
                    maxWidth: "auto",
                    minWidth: "60%",
                    height: "150px",
                    minHeight: "50px",
                    marginTop: "20px",
                    // border: "0.1px solid",
                  }}
                  contentEditable
                  placeholder=" [insert unit outcome] "
                  name="input3"
                  className="input3"
                  onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                      event.preventDefault();
                      // Insert a line break
                      const selection = window.getSelection();
                      const range = selection.getRangeAt(0);
                      const br = document.createElement("br");
                      range.insertNode(br);
                      range.setStartAfter(br);
                      range.setEndAfter(br);
                      range.collapse(false);
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                  }}
                  dangerouslySetInnerHTML={{
                    __html: state.input3,
                  }}
                  onInput={handleChange}
                ></div>
              </div>
            </div>
          </div>
          <p>
            This free Try It course is ungraded and does not award a
            certificate, but tell us what you think in the survey at the end!
          </p>
          <p>
            If you are new to the edX platform, we recommend reviewing the
            resources in{" "}
            <a
              href="https://www.google.com/url?q=https://www.edx.org/course/demox&sa=D&source=docs&ust=1685961469814455&usg=AOvVaw1S5GSUAC2YK9XZjaaZRoTV"
              target="_blank"
            >
              DemoX
            </a>
            . You can reach our technical support team via the{" "}
            <a href="https://support.edx.org/hc/en-us" target="_blank">
              Help
            </a>{" "}
            link in the upper right corner of any page.
          </p>
        </div>
      </>
    );
  } else {
    return (
      <div
        style={{ textAlign: "left", marginLeft: "auto", marginRight: "auto" }}
        dangerouslySetInnerHTML={{ __html: result }}
      ></div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state.welcomePageReducer,
    view: state.saveAndViewReducer.view,
    result: state.saveAndViewReducer.result,
  };
};
export default connect(mapStateToProps, {})(WelcomePage);
