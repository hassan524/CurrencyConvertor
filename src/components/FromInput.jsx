import React, { useState, useEffect } from "react";
import UseCurrency from "../hooks/useCurrencyinfo";
import CountryImage from "../hooks/CountryImage";



const Input = ({ selectedCurr, SetselectedCurr, currency, Setcurrency }) => {

    const rates = UseCurrency(selectedCurr);

    const { selectimg } = CountryImage();

    return (
        <div className="flex flex-col gap-[.5rem]">
            <label className="text-center text-slate-200 kanit-regular" htmlFor="from">From</label>

            <div className="flex h-[6vh]">
                <input
                    type="number"
                    className="w-80 kanit-regular tracking-widest  text-slate-200 text-md focus:outline-none border-s-[1px] border-t-[1px] border-b-[1px] roun bg-transparent px-2 rounded-s-md"
                    onChange={(e) => Setcurrency(e.target.value)}
                    value={currency}
                    required
                />

                <div className="flex-grow flex">
                    <select
                        className="w-[50%] bg-transparent placeholder:text-slate-400 text-slate-200 text-sm border border-slate-200 px-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                        onChange={(e) => SetselectedCurr(e.target.value)}
                        value={selectedCurr}
                    >
                        {rates
                            ? Object.keys(rates).map((code) => (
                                <option className="text-slate-700"
                                    key={code}
                                    value={code}>
                                    {code}
                                </option>
                            ))
                            : <option>Loading...</option>}
                    </select>
                    <div className="flex-grow kanit-regular flex items-center justify-center ige rounded-e-md border-e-[1px] border-t-[1px] border-b-[1px] border-e-slate-200">
                        {selectimg(selectedCurr) && (
                            <img
                                className="h-4"
                                src={selectimg(selectedCurr)}
                                alt={`${selectedCurr} flag`}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Input;
