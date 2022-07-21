import { useState } from "react";
import { data } from "./data";

function Search() {
  const [search, setSearch] = useState(data);
  const [city, setCity] = useState("");

  const handleSearch = (value) => {
    setCity(value);
    const filteredData = search.filter((data) => {
      return data.city.toLowerCase().includes(value.toLowerCase());
    });
    filteredData.length && value !== ""
      ? setSearch(filteredData)
      : setSearch(data);
    //setSearch(filteredData);
  };

  return (
    <div>
      <div>Search City</div>
      <div>
        <input
          type="text"
          name="first"
          value={city}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div>Data </div>
        {search.map((data) => {
          return <div key={data.city}>{data.city}</div>;
        })}
      </div>
    </div>
  );
}

export default Search;
