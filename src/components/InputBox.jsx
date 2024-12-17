import React from "react";


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  classname = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5 border-b border-gray-300 focus:border-blue-500"
          type="number"
          placeholder="Enter amount"
          value={amount || ""} 
          onChange={(e) => {
            if (onAmountChange) {
              onAmountChange(Number(e.target.value)); 
            }
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full"
          value={selectCurrency}
          onChange={(e) => {
            if (onCurrencyChange) {
              onCurrencyChange(e.target.value);
            }
          }}
        >
          {currencyOption.length > 0 ? (
            currencyOption.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))
          ) : (
            <option value="" disabled>
              No options available
            </option>
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
