"use client";

import React, { useEffect, useState } from "react";

const ROWS = 7;
const COLUMNS = 34;

const getRandomIntensity = () => Math.floor(Math.random() * 5); // 0 (no color) to 4 (darkest)

const ContributionBox = () => {
  const [intensity, setIntensity] = useState(getRandomIntensity());

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIntensity(getRandomIntensity()); // Randomly change intensity over time
      },
      Math.random() * 2000 + 1000,
    ); // Every 1s to 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-3 h-3   m-0.5 flex-shrink-0 transition-colors duration-500"
      style={{
        backgroundColor:
          intensity === 0
            ? "rgb(235, 237, 240)"
            : `rgb(${140 - intensity * 30}, ${200 - intensity * 20}, ${140 - intensity * 30})`,
      }}
    />
  );
};

const GithubChart = () => {
  return (
    <div className="overflow-x-hidden w-full flex">
      <div className="flex flex-col gap-0.5 min-w-fit">
        {Array.from({ length: ROWS }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-0.5 whitespace-nowrap">
            {Array.from({ length: COLUMNS }).map((_, columnIndex) => (
              <ContributionBox key={`${rowIndex}-${columnIndex}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubChart;
