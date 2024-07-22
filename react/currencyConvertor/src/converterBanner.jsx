import React, { useCallback, useEffect, useState } from "react";

const amountInputId = Math.random();
const amountOutputId = Math.random(); 

function ConverterBanner() {

    let [currency, setCurrency] = useState("usd");
    let [outputCurrency, setOutputCurrency] = useState("inr"); 
    let [convertedCurrencies, setConvertedCurrencies] = useState({});
    let [amountInput, setAmountInput] = useState(0);
    let [amountOutput, setAmountOutput] = useState(0); 

    const arr = ["inr","usd"]; 

    let convertCurrency =  (currency) => {
     
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((value) => {
            return value.json(); 
        })
        .then((value)=> {
            setConvertedCurrencies(value[currency]); 
        })
        .catch((value) => {
            console.log("error while resolving api"+value); 
        });
    }; 
    
    const options = Object.keys(convertedCurrencies); 
    const inputOptions = options.map((value) => {
        return <option value={value}> {value} </option>; 
    })
    const outputOptions =  options.map((value) => {
        return <option value={value}> {value} </option>; 
    })
    useEffect(()=> { 
        convertCurrency(currency); 
    }, [currency, outputCurrency, amountInput])
 
 
    return (
        <div className=" bg-slate-800 text-cyan-300 ">
            <div className="text-center">
                Convert Currency
            </div>
            <div>
            <div className="text-center bg-black">
                From
            </div>
            </div>

            {/* currency A --> input  */}
            <div className="flex gap-2"> 
                Currency A. 
                <div className=" border-2 border-l-black border-blue-400 text-white mb-2 inline-block">
                    <label htmlFor={amountInputId}></label>
                    <input 
                    className="bg-sky-800"
                    type="number" id={amountInputId} 
                    value={amountInput}
                    onChange={(event)=>{
                        console.log(event.target.value); 
                        return setAmountInput(event.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="inputCurrency"></label>
                    <select 
                    className="bg-sky-800"
                    name="currencies" id="inputCurrency"
                    value={currency}
                    onChange={(event)=>(setCurrency(event.target.value))}>
                    {inputOptions}
                    </select>
                </div>
            </div>
            <div className="text-center bg-black">
                To
            </div>

            {/* currency B -> output */}
            <div className="flex gap-2">
                Currency B.
                <div className=" border-2 border-l-black border-blue-400 text-white mb-2 inline-block">
                    <label htmlFor={amountOutputId}></label>
                    <input 
                    className="bg-sky-800"
                    type="number" 
                    id={amountOutputId} 
                    value={Math.floor(amountInput*convertedCurrencies[outputCurrency])}
                    readOnly/>
                </div>   
                <div>
                    <label htmlFor="outputCurrency"></label>
                    <select 
                    className="bg-sky-800"
                    name="currencies" id="outputCurrency"
                    value={outputCurrency}
                    onChange={(event)=> ( setOutputCurrency(event.target.value))}>
                        {outputOptions}
                    </select>
                </div>
            </div>

        </div>
    );
}
export default ConverterBanner;
