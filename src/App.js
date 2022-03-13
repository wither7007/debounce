import { useState } from "react";
import debounce from "lodash.debounce";
import "./styles.css";
import THANK_U_NEXT from "./THANK_U_NEXT";

const getFilteredItems = (query, items) => {
  console.log("in getFilteredItems");
  if (!query) {
    return items;
  }
  return items.filter((song) => song.name.includes(query));
};

export default function App() {
  const [query, setQuery] = useState("");

  const { tracks } = THANK_U_NEXT;
  const { items } = tracks;

  const filteredItems = getFilteredItems(query, items);

  const updateQuery = (e) => setQuery(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 200);

  return (
    <div key="app" className="App">
      <label>Search</label>
      <input type="text" onChange={debouncedOnChange} />
      <ul>
        {filteredItems.map((value) => (
          <h1 key={value.name}>{value.name}</h1>
        ))}
      </ul>
    </div>
  );
}
