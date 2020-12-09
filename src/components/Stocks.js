import { useEffect, useState } from "react";
import { getStocks } from "../utils/fetch";

function renderEachCard(stockItem) {
  return (
    <div className="card">
      <h3>{stockItem.name}</h3>
      <span>
        {stockItem.quantity} {stockItem.unit}
      </span>
    </div>
  );
}

/**
 *  @description
 *  This is an example of a slightly more "complex" component.
 *  useState: Useful for preserving state during re-renders
 *  useEffect: To perform lifecycle operations (e.g. onMount)
 *
 *  @summary
 *  1. In this component, we first render the "results" section with an empty array [] ---> `useState([])`.
 *  2. Upon completing its first render, the component triggers calls the useEffect to `loadDonations`, 
 *     which fetches a set of donations from our server. ---> `useEffect(loadDonations)`.
 *  3. Finally, the components store the fetched donations in the state, and re-renders the component with the newly fetched data.
 *
 *  Learn more about states and lifecycle hooks here: https://reactjs.org/docs/hooks-overview.html
 */

function Stocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(loadStocks);

  async function loadStocks() {
    const data = await getStocks();
    setStocks(data);
  }

  return (
    <section className="results">
      <div className="container">{stocks.map(renderEachCard)}</div>
    </section>
  );
}

export default Stocks;