const box = document.getElementById("liveMatchBox");

if (tournament.liveMatch.isLive) {
  box.style.display = "block";
  document.getElementById("liveTeams").innerText =
    tournament.liveMatch.teamA + " vs " + tournament.liveMatch.teamB;

  document.getElementById("liveScore").innerText =
    tournament.liveMatch.runs + "/" +
    tournament.liveMatch.wickets +
    " (" + tournament.liveMatch.overs + " overs)";
}
