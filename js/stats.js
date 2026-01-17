if (!localStorage.getItem("players")) {
  localStorage.setItem("players", JSON.stringify({
    "Ayaan Mishra": { runs: 0, wickets: 0 },
    "Ajay Singh": { runs: 0, wickets: 0 },
    "Pravesh": { runs: 0, wickets: 0 },
    "Sandeep": { runs: 0, wickets: 0 }
  }));
}
<script>
const players = JSON.parse(localStorage.getItem("players"));
const table = document.getElementById("playerTable");

for (let name in players) {
  table.innerHTML += `
    <tr>
      <td>${name}</td>
      <td>${players[name].runs}</td>
      <td>${players[name].wickets}</td>
    </tr>`;
}
</script>
