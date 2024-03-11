import allCountryScores from "./scores";

function CountryName() {
  return (
    <div
      style={{
        border: "solid white 4px",
      }}
    >
      <h1 className="h1-test">All Country Scores</h1>
      <div>{Getname(allCountryScores)}</div>
    </div>
  );
}

function Getname(scores) {
  const sortedCountries = scores.slice().sort((a, b) => {
    // Compare the country names
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      {sortedCountries.map((country, index) => (
        <div
          style={{
            border: "solid red 3px",
            padding: "20px",
            margin: "12px",
          }}
          key={index}
        >
          <h2>High Scores: {country.name}:</h2>
          <div>
            {country.scores.map((score, scoreIndex) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  border: "solid white 1px",
                }}
                key={scoreIndex}
              >
                {score.n}: {score.s}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default CountryName;
