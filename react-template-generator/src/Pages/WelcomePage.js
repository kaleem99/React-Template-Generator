function WelcomePage() {
  return (
    <div>
      <h1>Welcome Page</h1>
      <div
        className="Welcome PageDiv"
        style={{
          width: "60%",
          height: "auto",
          padding: "20px",
          // border: "1px solid",
          // margin: "5% auto",
          textAlign: "left",
          margin: 0,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            width: "530px",
          }}
        >
          <h1 style={{ color: "#00262B" }}>Welcome To Try It:</h1>
          <input
            style={{
              width: "200px",
              height: "40px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
            // onChange={changeStateValue}
            name="input1"
            // value={state.input1}
            placeholder="[Insert try it title]"
          />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
          <div style={{ width: "70%" }}>
            <h1 style={{ color: "#002D58" }}>Welcome to the course</h1>
            <p>
              Thank you for joining this Try It course. This course is a portion
              of a module in the full{" "}
              <input
                style={{ width: "180px", height: "30px" }}
                placeholder="[insert UP name]"
                name="input2"
                // value={state.input2}
                // onChange={changeStateValue}
              />{" "}
              <input
                style={{ width: "180px", height: "30px" }}
                placeholder="[insert Executive Education course name]"
                name="input3"
                // value={state.input3}
                // onChange={changeStateValue}
              />{" "}
              course. After completing this Try It course, you'll be able to:
            </p>
          </div>
          <div>
            {/* <img onDoubleClick={() => setImageSelect(true)} src={image}></img> */}
          </div>
        </div>
        <ul>
          <li>
            <div
              style={{
                maxWidth: "auto",
                minWidth: "30%",
                height: "auto",
                minHeight: "50px",
                border: "0.5px solid",
              }}
              contentEditable
              placeholder=" [insert unit outcome] "
              name="input4"
              className="input4"
              dangerouslySetInnerHTML={{ __html: "Insert Learning Outcomes" }}
              // onInput={changeStateValue}
            ></div>
          </li>
        </ul>
        <p>
          This free Try It course is ungraded and does not award a certificate,
          but tell us what you think in the survey at the end!
        </p>
        <p>
          If you are new to the edX platform, we recommend reviewing the
          resources in{" "}
          <a href="https://www.google.com/url?q=https://www.edx.org/course/demox&sa=D&source=docs&ust=1685961469814455&usg=AOvVaw1S5GSUAC2YK9XZjaaZRoTV">
            DemoX
          </a>
          . You can reach our technical support team via the{" "}
          <a href="https://support.edx.org/hc/en-us">Help</a> link in the upper
          right corner of any page.
        </p>
      </div>
    </div>
  );
}
export default WelcomePage;
