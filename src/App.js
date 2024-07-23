import { useState } from "react";
import ItemList from "./ItemList";

const App = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      title: "Teacher List",
      summary: "List of teacher",
      fullDescription: "Here we Provide multiple student list",
    },
    {
      id: 2,
      title: "Student List",
      summary: "List of student",
      fullDescription: "Here we Provide multiple Teacher list",
    },
  ]);

  return (
    <>
      <div>
        <ItemList items={item} setItems={setItem} />
      </div>
    </>
  );
};

export default App;
