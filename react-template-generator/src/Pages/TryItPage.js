function TryItPage() {
  return (
    <div>
      <h1 style={{ color: "#E52370" }}> [Try It content] </h1>
      <div
        style={{
          width: "90%",
          height: "auto",
          padding: "20px",
          // border: "1px solid",
          margin: "2% auto",
          minHeight: "300px",
        }}
      >
        {/* <div>
            <img src="https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg"></img>
          </div> */}

        <div
          className="FacultyBiographies"
          style={{
            width: "100%",
            height: "auto",
            //   padding: "20px",
            //   border: "1px solid",
            margin: "0% auto",
          }}
        >
          {/* <Paragraph
            state={state}
            index={index}
            type={courseSection
              .replace(/([a-z])([A-Z])/g, "$1 $2")
              .toLowerCase()}
            onChange={handleChange}
          /> */}
          <div
            style={{
              width: "auto",
              maxHeight: "65vh",
              overflow: "scroll",
              border: "1px solid",
              minHeight: "400px",
              padding: "20px",
            }}
            // onInput={(e) => onChange(e.target.innerHTML, index)}
            // value={eval(state[`input${index}`])}
            // name={"input" + index}
            className={`inputs`}
            // key={index}
            contenteditable="true"
          ></div>
        </div>
      </div>
    </div>
  );
}
export default TryItPage;
