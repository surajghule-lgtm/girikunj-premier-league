// ===== CONFIG =====
const ADMIN_PASSWORD = "gpl2026";

// ===== STATE =====
let runs = 0;
let wickets = 0;

// ===== LOGIN =====
function login() {
  const pass = document.getElementById("password").value;
  if (pass === ADMIN_PASSWORD) {
    document.getElementById("loginCard").classList.add("hidden");
    document.getElementById("panel").classList.remove("hidden");
  } else {
    alert("Wrong password");
  }
}

// ===== SCORE ACTIONS =====
function addRuns(n) {
  runs += n;
  updatePreview();
}

function addWicket() {
  wickets += 1;
  updatePreview();
}

// ===== UPDATE SCORE PREVIEW =====
function updatePreview() {
  const overs = document.getElementById("overs").value;
  document.getElementById("preview").innerText =
    `${runs}/${wickets} (${overs})`;
}

// ===== SAVE BALL =====
function saveBall() {
  const match = document.getElementById("match").value;
  const overs = document.getElementById("overs").value;
  const batsman = document.getElementById("batsman").value.trim();
  const bowler = document.getElementById("bowler").value.trim();

  // ---- SAVE LIVE SCORE ----
  const liveScore = {
    match,
    runs,
    wickets,
    overs,
    time: Date.now()
  };
  localStorage.setItem("liveScore", JSON.stringify(liveScore));

  // ---- PLAYER STATS ----
  let stats = JSON.parse(localStorage.getItem("playerStats")) || {};

  if (batsman !== "") {
    if (!stats[batsman]) {
      stats[batsman] = { runs: 0, balls: 0, wickets: 0 };
    }
    stats[batsman].runs += 1;
    stats[batsman].balls += 1;
  }

  if (bowler !== "" && wickets > 0) {
    if (!stats[bowler]) {
      stats[bowler] = { runs: 0, balls: 0, wickets: 0 };
    }
    stats[bowler].wickets += 1;
  }

  localStorage.setItem("playerStats", JSON.stringify(stats));

  document.getElementById("status").innerText = "✅ Ball saved & live!";
  setTimeout(() => {
    document.getElementById("status").innerText = "";
  }, 1500);
}
