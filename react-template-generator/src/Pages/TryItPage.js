import { connect, useDispatch } from "react-redux";
import { TRY_IT_PAGE_ONCHANGE } from "../Redux/actions";
import { DivContent, ScriptContent } from "../Helpers/HTMLContent";
import { useEffect, useState } from "react";
function TryItPage({ view, result }) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (num === 0) {
      const div = document.createElement("div");

      div.innerHTML = DivContent;
      const scriptElement = document.createElement("script");
      const script2 = document.createElement("script");
      script2.src = "http://code.jquery.com/jquery-2.1.0.min.js";
      script2.onload = loadJQueryUI;
      function loadJQueryUI() {
        const link = document.createElement("link");
        link.href =
          "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css";

        const script3 = document.createElement("script");
        script3.src =
          "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js";
        script3.onload = initializeDraggable;

        document.body.appendChild(link);
        document.body.appendChild(script3);
      }
      function initializeDraggable() {
        scriptElement.innerHTML = ScriptContent;
        document.body.appendChild(scriptElement);
      }
      document.body.appendChild(script2);
      document.body.appendChild(div);

      setNum(num + 1);
    }
  }, []);
  const dispatch = useDispatch();
  console.log(view);
  const testingData = () => {
    console.log(100);
  };
  const handlTryItContent = (content) => {
    console.log(content);
    var parser = new DOMParser();

    // Parse the HTML string
    var doc = parser.parseFromString(content, "text/html");
    let aTags = doc.getElementsByTagName("a");
    const elements = doc.getElementsByTagName("*");

    // Remove backgroundColor from each element
    let pElements = doc.getElementsByTagName("p");
    for (let i = 0; i < pElements.length; i++) {
      pElements[i].style.fontSize = "16px";
      let children = pElements[i].children;
      for (let j = 0; j < children.length; j++) {
        if (children[j].nodeType === Node.ELEMENT_NODE) {
          children[j].style.fontSize = "16px";
        }
      }
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "";
      elements[i].style.backgroundColor = "";
      if (
        (elements[i].tagName === "P" ||
          elements[i].tagName === "H1" ||
          elements[i].tagName === "H2" ||
          elements[i].tagName === "H3" ||
          elements[i].tagName === "H4") &&
        !elements[i].id.includes("docs")
      ) {
        elements[i].setAttribute("ondblclick", `testingData(this)`);
      }
      // console.log(elements[i])
    }
    for (let i = 0; i < aTags.length; i++) {
      aTags[i].setAttribute("target", "_blank");
      let children = aTags[i].children;
      for (let j = 0; j < children.length; j++) {
        if (children[j].nodeType === Node.ELEMENT_NODE) {
          children[j].style.fontSize = "16px";
        }
      }
    }
    content = doc.getElementsByTagName("body")[0].innerHTML;

    document.getElementById("contentEditable").innerHTML = content;
    dispatch({ type: TRY_IT_PAGE_ONCHANGE, payload: content });
  };
  if (!view) {
    return (
      <div>
        {/* <h1 style={{ color: "#E52370" }}> [Try It content] </h1> */}
        <div
          style={{
            width: "90%",
            height: "auto",
            padding: "20px",
            // border: "1px solid",
            margin: "5% auto",
            minHeight: "300px",
            textAlign: "left",
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
            <div
              style={{
                width: "auto",
                maxHeight: "65vh",
                overflow: "scroll",
                border: "1px solid",
                minHeight: "400px",
                padding: "20px",
              }}
              onInput={(e) => handlTryItContent(e.target.innerHTML)}
              onMouseOut={() => {
                let result =
                  document.getElementById("contentEditable").innerHTML;
                dispatch({ type: TRY_IT_PAGE_ONCHANGE, payload: result });
              }}
              onMouseLeave={() => console.log(111)}
              className={`inputs`}
              id="contentEditable"
              contentEditable="true"
            ></div>
          </div>
        </div>
      </div>
    );
  } else {
    console.log(result);
    return (
      <div
        style={{
          textAlign: "left",
          margin: "1% auto",
          width: "auto",
          height: "75vh",
          overflowX: "scroll",
        }}
        dangerouslySetInnerHTML={{ __html: result }}
      ></div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    view: state.saveAndViewReducer.view,
    result: state.saveAndViewReducer.result,
  };
};
export default connect(mapStateToProps, {})(TryItPage);
