import React from "react";

//import logo from "../../../logo.svg";
import "../../../App.css";
import ReactMarkdown from "react-markdown";
import MarkdownFile1 from "./../../../README.md";
import MarkdownFile2 from "./../../../kmom02.md";

function One(Report) {
  const [markdown, setMarkdown] = React.useState("");
  var MarkdownFile;
  if (Report) {
    MarkdownFile = MarkdownFile1;
  } else {
    MarkdownFile = MarkdownFile2;
  }

  React.useEffect(() => {
    fetch(MarkdownFile)
      .then(res => res.text())
      .then(text => setMarkdown(text));
  });
  return (
    <div className="reports">
      <a href="https://github.com/UnsinkableSam/me-application">
        <i className="GithubIcon"></i> Github länk
      </a>
      <ReactMarkdown source={markdown} />
    </div>
  );
}

export default One;
