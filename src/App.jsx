import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Pagination from "./components/Pagination";

const App = () => {
  const [category, setcategory] = useState("general");
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Navbar setSearchText={setSearchText} setcategory={setcategory} />
      <NewsBoard searchKey={searchText} category={category} />
    </div>
  );
};
export default App;
