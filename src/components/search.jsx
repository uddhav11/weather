import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Options, geoApiUrl } from "./api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loading = (inputValue) => {
    return fetch(
      `${geoApiUrl}/cities?minPopulation=100&namePrefix=${inputValue}`,
      Options
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <>
      <AsyncPaginate
        placeholder="enter the name of city"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loading}
      />
    </>
  );
};

export default Search;
