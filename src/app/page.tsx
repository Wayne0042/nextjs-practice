"use client"

import React, { useState } from "react";

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function Home() {
  const [year, setYear] = useState("");
  const [result, setResult] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setYear(e.target.value)
  }

  function handleClick() {
    const isLeap = isLeapYear(parseInt(year));
    setResult(isLeap ? `${year} 是閏年` : `${year} 不是閏年`);
  }

  return (
    <div>
      <input type="text" value={year} onChange={handleChange} />
      <button onClick={handleClick}>is leap year?</button>
      <span>{result}</span>
    </div>
  );
}

export default Home;