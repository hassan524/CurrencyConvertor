import React, { useState } from "react";
import bgImage from "../assets/bg.jpg";
import Input from "../components/FromInput";
import ToInput from "../components/ToInput";
import UseCurrency from "../hooks/useCurrencyinfo";

const App = () => {
  const [selectedCurr, SetselectedCurr] = useState("USD");
  const [toSelectCurr, SetToSelectCurr] = useState("EUR");
  const [currency, Setcurrency] = useState("");
  const [result, SetResult] = useState(null);

  const rates = UseCurrency(selectedCurr);

  const handleConvert = () => {
    if (currency && rates[selectedCurr] && rates[toSelectCurr]) {
      const convertedAmount = (currency / rates[selectedCurr]) * rates[toSelectCurr];
      SetResult(convertedAmount);
    } else {
      SetResult("Invalid input");
    }
  };
  

  return (
    <div
      className="w-full flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
      }}
    >
      <div className="bg-slate-800 h-[52vh] min-h-[50vh] max-h-[70vh] w-full max-w-[500px] md:w-[470px] mx-[2rem] rounded-xl">
        <div className="h-full w-full flex flex-col p-[1.5rem] gap-3">
          <Input
            selectedCurr={selectedCurr}
            SetselectedCurr={SetselectedCurr}
            currency={currency}
            Setcurrency={Setcurrency}
          />
          <ToInput SetToSelectCurr={SetToSelectCurr} toSelectCurr={toSelectCurr} />
          <div className="text-center text-slate-200 kanit-regular mt-2">
            {result !== null && <span>Converted Amount: {result}</span>}
          </div>
          <button
            className="bg-slate-500 w-36 mx-auto mt-5 py-[7px] rounded-md kanit-regular text-slate-200 active:scale-95"
            onClick={handleConvert}
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
