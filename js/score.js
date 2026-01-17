// 🔐 Password protection
const PASSWORD = "GPL2026";
const entered = prompt("Enter Admin Password");

if (entered === PASSWORD) {
  document.getElementById("panel").style.display = "block";
} else {
  document.getElementById("denied").innerText = "🚫 Access Denied";
}

// Game state
let runs = 0;
let wickets = 0;

function updatePreview() {
  const overs = document.getElementById("overs").value;
  document.getElementById("preview").innerText =
    `${runs}/${wickets} (${overs})`;
}

function addRuns(r) {
  runs += r;
  updatePreview();
}

function addWicket() {
  wickets += 1;
  updatePreview();
}

function saveScore() {
  const match = document.getElementById("match").value;
  const overs = document.getElementById("overs").value;
  let batsman = document.getElementById("batsman").value.trim();
  let bowler = document.getElementById("bowler").value.trim();

  batsman = batsman.replace(/\b\w/g, c => c.toUpperCase());
  bowler = bowler.replace(/\b\w/g, c => c.toUpperCase());

  // Save live match score
  localStorage.setItem("liveScore", JSON.stringify({
    match, runs, wickets, overs
  }));

  // Player stats
  let players = JSON.parse(localStorage.getItem("players")) || {};

  if (batsman) {
    if (!players[batsman]) players[batsman] = { runs: 0, wickets: 0 };
    players[batsman].runs += 0; // runs already counted globally
  }

  if (bowler) {
    if (!players[bowler]) players[bowler] = { runs: 0, wickets: 0 };
    players[bowler].wickets += 1;
  }

  localStorage.setItem("players", JSON.stringify(players));

  document.getElementById("status").innerText =
    "✅ Ball saved successfully";
}
