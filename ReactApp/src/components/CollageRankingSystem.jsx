import React, { useState } from "react";

const styles = `
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .card {
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .card h2 {
    margin-top: 0;
    color: #333;
  }

  .input-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 15px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;

const initialColleges = [
  { name: "College A", location: "New York", fees: 20000, ranking: 1 },
  { name: "College B", location: "California", fees: 15000, ranking: 2 },
  { name: "College C", location: "New York", fees: 25000, ranking: 3 },
  { name: "College D", location: "New York", fees: 10000, ranking: 4 },
  { name: "College E", location: "California", fees: 12000, ranking: 5 },
  { name: "College F", location: "California", fees: 20000, ranking: 7 },
  { name: "College G", location: "California", fees: 19000, ranking: 6 },
];

const CollegeRankingSystem = () => {
  const [colleges] = useState(initialColleges);
  const [preferredLocation, setPreferredLocation] = useState("");
  const [maxFees, setMaxFees] = useState(0);
  const [rankingWeight, setRankingWeight] = useState(0);
  const [feesWeight, setFeesWeight] = useState(0);
  const [rankedColleges, setRankedColleges] = useState([]);

  const rankColleges = () => {
    const filteredColleges = colleges.filter(
      (college) =>
        college.location === preferredLocation && college.fees <= maxFees
    );

    const scoredColleges = filteredColleges.map((college) => ({
      ...college,
      score:
        college.ranking * rankingWeight + (college.fees / maxFees) * feesWeight,
    }));

    const sortedColleges = scoredColleges.sort((a, b) => a.score - b.score);
    setRankedColleges(sortedColleges);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="container">
        <div className="card">
          <h2 style={{ textAlign: "center" }}>College Ranking System</h2>
          <div className="input-group">
            <input
              placeholder="Preferred Location"
              value={preferredLocation}
              onChange={(e) => setPreferredLocation(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Fees"
              value={maxFees}
              onChange={(e) => setMaxFees(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="Ranking Weight"
              value={rankingWeight}
              onChange={(e) => setRankingWeight(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="Fees Weight"
              value={feesWeight}
              onChange={(e) => setFeesWeight(Number(e.target.value))}
            />
          </div>
          <button onClick={rankColleges}>Rank Colleges</button>
        </div>

        {rankedColleges.length > 0 && (
          <div className="card">
            <h2>Ranked Colleges</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Fees</th>
                  <th>Ranking</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {rankedColleges.map((college, index) => (
                  <tr key={index}>
                    <td>{college.name}</td>
                    <td>{college.location}</td>
                    <td>{college.fees}</td>
                    <td>{college.ranking}</td>
                    <td>{college.score.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default CollegeRankingSystem;
