import React, { Component, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Quill from "quill";
import ImageResize from "@looop/quill-image-resize-module-react";

const Font = Quill.import("formats/font");
Font.whitelist = ["serif", "BMJUA", "NanumSquareRound"];
Quill.register(Font, true);
Quill.register("modules/ImageResize", ImageResize);

const modules = {
  toolbar: [
    [{ font: Font.whitelist }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ["clean"],
  ],
  ImageResize: { modules: ["Resize"] },
};

const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];

const QuillTextEditor = (props) => {
  const [text, setText] = useState("");

  const handleText = (value) => {
    console.log(value);
    setText(value);
  };
  return (
    <div>
      <div className="text-editor">
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
