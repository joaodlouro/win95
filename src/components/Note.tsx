import React from "react";
import { TextArea } from "@react95/core";

function Note() {
  const [text, setText] = React.useState("");

  return (
    <TextArea
      rows={15}
      cols={50}
      value={text}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
      style={{ resize: "none", width: "100%", height: "100%" }}
    />
  );
}

export default Note;
