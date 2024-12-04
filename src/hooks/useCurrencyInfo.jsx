import { useState, useEffect } from "react";

const UseCurrency = (baseCurrency) => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/1893568fb5378019565aea5d/latest/${baseCurrency}`
        );
        const data = await response.json();
        setRates(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching rates:", error);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return rates;
};

export default UseCurrency;
