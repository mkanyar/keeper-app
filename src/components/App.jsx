//jshint esversion:6

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import notes from "./notes";





function App() {
  return (
    <div>
      <Header />
       {notes.map(item =>(
       <Card
      key={item.key}
      title={item.title}
      content={item.content}
                         />
       ))}
      <Footer />
    </div>
  );
}

export default App;
