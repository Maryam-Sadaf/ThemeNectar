import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { configure } from "@testing-library/react";

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline"],
};

const RichTextEditor = ({ initialValue, getValue ,setValue}) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      useRef={editor}
      value={initialValue}
      config={config}
      tabIndex={1}
      //   onBlur={(newContent) => getValue(newContent)}
      onChange={(newContent) => getValue(newContent)}
    
    />
  );
};

export default RichTextEditor;