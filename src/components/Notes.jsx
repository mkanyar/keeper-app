import React from "react";
const customStyle = {
  fontWeight: "bold",
};
function Notes() {
  return (
    <notes>
      <p style={customStyle}>This is the note Title</p>
      <p className="note">This is the note content</p>
    </notes>
  );
}
export default Notes;
