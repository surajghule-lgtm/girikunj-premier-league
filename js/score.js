function saveScore() {
  alert("saveScore() function CALLED");

  const runs = Number(document.getElementById("runs").value);
  const wickets = Number(document.getElementById("wickets").value);
  const overs = document.getElementById("overs").value;

  let batsman = document.getElementById("batsman").value.trim();
  let batRuns = Number(document.getElementById("batRuns").value);
  let bowler = document.getElementById("bowler").value.trim();

  // Capitalize names
  batsman = batsman.replace(/\b\w/g, c => c.toUpperCase());
  bowler = bowler.replace(/\b\w/g, c => c.toUpperCase());

  // Save live score
  localStorage.setItem("liveScore", JSON.stringify({
    runs, wickets, overs
  }));

  // Load players or create empty
  let players = JSON.parse(localStorage.getItem("players")) || {};

  if (batsman) {
    if (!players[batsman]) {
      players[batsman] = { runs: 0, wickets: 0 };
    }
    players[batsman].runs += batRuns;
  }

  if (bowler) {
    if (!players[bowler]) {
      players[bowler] = { runs: 0, wickets: 0 };
    }
    players[bowler].wickets += 1;
  }

  localStorage.setItem("players", JSON.stringify(players));

  document.getElementById("status").innerText =
    "✅ Score & Player Stats Saved Successfully";
}
