import React, { useState } from "react";
import UseCurrency from "../hooks/useCurrencyinfo";
import CountryImage from "../hooks/CountryImage";



function ToInput({ toSelectCurr, SetToSelectCurr }) {

    const { selectimg } = CountryImage(toSelectCurr)


    const [baseCurrency, setBaseCurrency] = useState("USD");
    const rates = UseCurrency(baseCurrency);

    return (
        <div className="flex flex-col gap-[.5rem]">
            <label className="text-center text-slate-200 kanit-regular" htmlFor="from">To</label>

            <div className="flex h-[6vh]">

                <div className="flex w-full justify-center">
                    <select
                        className="kanit-regular w-[30%] rounded-s-md bg-transparent placeholder:text-slate-400 text-slate-200 text-sm border border-slate-200 px-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                        onChange={(e) => SetToSelectCurr(e.target.value)}
                        value={toSelectCurr}
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

                    {/* Decorative Border */}
                    <div className="flex w-[30%] items-center justify-center rounded-e-md border-e-[1px] border-t-[1px] border-b-[1px] border-e-slate-200">
                        {selectimg(toSelectCurr) && (
                            <img
                                className="h-4"
                                src={selectimg(toSelectCurr)}
                                alt={`${toSelectCurr} flag`} />
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ToInput