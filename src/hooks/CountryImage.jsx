import React from 'react';
import currencyToCountryCode from '../utils/CurrencyToCountryCode';

function CountryImage() {
  const selectimg = (countryCode) => {
    const countryName = currencyToCountryCode[countryCode];
    return countryName ? `https://flagcdn.com/w320/${countryName.toLowerCase()}.png` : '';
  };

  return { selectimg };  
}

export default CountryImage;
