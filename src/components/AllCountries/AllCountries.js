import React, { useEffect, useState } from "react";

// Api
import { apiUrl } from "../util/api";

import FilterLang from "../filterLang/FilterLang";

import PopUp from "../PopUp/PopUp";
const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [pupup, setPopup] = useState(false);
  const [country, setCountry] = useState([]);
  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiUrl}/all`);
      if (!res.ok) throw new Error("Something Went Wrong!");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
    }
  };

  const getCountryByLang = async (coutLang) => {
    try {
      const res = await fetch(`${apiUrl}/lang/${coutLang}`);
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const fetchCountryData = async (code) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      const countryData = await response.json();
      setCountry(countryData);
    } catch (error) {

      return null;
    }
  };


  return (
    <>
      <div className="filter mt-5 text-center">
        <FilterLang onSelect={getCountryByLang} />
      </div>
      <div className="bottom row row-cols-lg-3 row-cols-md-2 my-5 text-center gx-2">
        {isLoading && !isError && <h4>Loading...............</h4>}
        {!isLoading && isError && <h4>There is an error</h4>}
        {countries?.map((country) => {
          return (
            <div
              onClick={() => {
                setPopup(true);
                fetchCountryData(country.ccn3);
              }}
              className=""
              key={Math.random()*1000}>
              <div
                className="pt-5"
                style={{ background: "#b5c7e3", cursor: "pointer" }}>
                <img
                  className=""
                  style={{ width: "250px", height: "200px" }}
                  src={country.flags.png}
                  alt="Flag"
                />
                <h1 className="p-3 fs-6 text-white">{country.name.common}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <PopUp trigger={pupup} setTrigger={setPopup}>
        {country?.map((country) => {
          return (
            <div key={Math.random()*1000} className="" >
              <table className="table table-bordered">
                <tbody className="text-white">
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Country</td>
                    <td>{country.name.common}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Capital</td>
                    <td>{country.capital}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Population</td>
                    <td>{country.population}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Borders</td>
                    <td>{country.borders === undefined ? 'The Borders is Not Found' : country.borders.join(' , ') }</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Region</td>
                    <td>{country.region}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Area</td>
                    <td>{country.area} km²</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </PopUp>
    </>
  );
};

export default AllCountries;
