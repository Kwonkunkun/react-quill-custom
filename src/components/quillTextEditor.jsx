import React, { Component, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Quill from "quill";
import ImageResize from "@looop/quill-image-resize-module-react";
const Font = Quill.import("formats/font");
Font.whitelist = ["dotum", "gullim", "batang", "NanumGothic"];
Quill.register(Font, true);
Quill.register("modules/ImageResize", ImageResize);

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
    </select>
    <select className="ql-font">
      <option value="serif"></option>
      <option value="dotum"></option>
      <option value="NanumSquareRound"></option>
      <option value="BMJUA"></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option selected></option>
    </select>
    <select className="ql-background"></select>
    <button className="ql-link"></button>
    <button className="ql-image"></button>
  </div>
);

const QuillTextEditor = (props) => {
  const modules = {
    toolbar: {
      container: "#toolbar",
    },
    ImageResize: { modules: ["Resize"] },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "color",
    "background",
    "image",
  ];

  const [text, setText] = useState("");

  const handleText = (value) => {
    console.log(value);
    setText(value);
  };
  return (
    <div>
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          modules={modules}
          formats={formats}
          value={text}
          onChange={handleText}
        />
      </div>
    </div>
  );
};

export default QuillTextEditor;
