import React from "react";
import ReactDOM from "react-dom";
import logo from "../../../logo.svg";
import "../../../App.css";
import ReactMarkdown from "react-markdown";
import MarkdownFile from "./../../../README.md";

function One() {
  const [markdown, setMarkdown] = React.useState("");

  React.useEffect(() => {
    fetch(MarkdownFile)
      .then(res => res.text())
      .then(text => setMarkdown(text));
  });
  return (
    <div>
      <ReactMarkdown source={markdown} />
    </div>
  );
}

export default One;
