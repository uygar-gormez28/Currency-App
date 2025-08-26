import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";

let BASE_URL = "http://api.freecurrencyapi.com/v1/latest";
let APİ_KEY = "fca_live_XURFCn0clS9MvrDj8UceJgHjYAJfBsFPyFEFeBXE";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState(`USD`);
  const [toCurrency, setToCurrency] = useState(`TRY`);
  const [results, setResults] = useState(0);

  const exchange = async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${APİ_KEY}&base_currency=${fromCurrency}`);
    console.log(response);
  };
  return (
    <div>
      <div className="currency-div">
        <div className="header">
          <h3>DÖVİZ KUR APP</h3>
        </div>
        <div className="try">
          <input
            type="text"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="amount"
          />
          <select
            onChange={(e) => {
              setFromCurrency(e.target.value);
            }}
            className="from-currency-option"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="TRY">TRY</option>
          </select>
          <FaArrowRight className="arrow" />

          <select
            onChange={(e) => {
              setToCurrency(e.target.value);
            }}
            className="to-currency-option"
          >
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <input
            type="text"
            value={results}
            onChange={(e) => {
              setResults(e.target.value);
            }}
            className="results"
          />
        </div>

        <div className="btn">
          <button onClick={exchange}>Hesapla</button>
        </div>
      </div>
    </div>
  );
};

export default Currency;
