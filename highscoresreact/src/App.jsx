//import React from "react";
import allCountryScores from "./scores";

function App() {
  return (
    <div>
      <h1>All Country Scores:</h1>
      <div
        style={{
          border: "solid green 1rem",
        }}
      >
        test.div
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          background: "yellow",
          color: "black",
          gap: "2rem",
          border: "solid red 1rem",
        }}
      >
        {GetCountryName(allCountryScores)}
      </ul>

      <h1>All Country Scores:</h1>
      <ul>{GetCountryScores(allCountryScores)}</ul>
    </div>
  );
}

// function Getname(scores) {
//   return (
//     <>
//       {scores.map((country, index) => (
//         <li key={index}>
//           High Scores for {country.name}:
//           <ul>
//             {country.scores.map((score, scoreIndex) => (
//               <div key={scoreIndex}>
//                 {score.n}: {score.s}
//               </div>
//             ))}
//           </ul>
//         </li>
//       ))}
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>All Country Names:</h1>
//       <ul>
//         <GetCountryName scores={allCountryScores} />
//       </ul>

//       <h1>All Country Scores:</h1>
//       <ul>
//         <GetCountryScores scores={allCountryScores} />
//       </ul>
//     </div>
//   );
// }

function GetCountryName(scores) {
  return (
    <>
      {scores.map((country, index) => (
        <li key={index}>{country.name}</li>
      ))}
    </>
  );
}

function GetCountryScores(scores) {
  return (
    <>
      {scores.map((country, index) => (
        <li key={index}>
          High Scores for {country.name}:
          <ul>
            {country.scores.map((score, scoreIndex) => (
              <div key={scoreIndex}>
                {score.n}: {score.s}
              </div>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
}

export default App;
