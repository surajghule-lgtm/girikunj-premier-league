const PASSWORD = "GPL2026";

let runs = 0;
let wickets = 0;

function login() {
  const entered = document.getElementById("password").value;
  if (entered === PASSWORD) {
    document.getElementById("loginCard").classList.add("hidden");
    document.getElementById("panel").classList.remove("hidden");
  } else {
    alert("Wrong password");
  }
}

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
  wickets++;
  updatePreview();
}

function saveBall() {
  const data = {
    match: document.getElementById("match").value,
    runs,
    wickets,
    overs: document.getElementById("overs").value
  };

  localStorage.setItem("liveScore", JSON.stringify(data));
  document.getElementById("status").innerText = "✅ Score saved";
}
