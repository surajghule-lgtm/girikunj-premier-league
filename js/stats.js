if (!localStorage.getItem("players")) {
  localStorage.setItem("players", JSON.stringify({
    "Ayaan Mishra": { runs: 0, wickets: 0 },
    "Ajay Singh": { runs: 0, wickets: 0 },
    "Pravesh": { runs: 0, wickets: 0 },
    "Sandeep": { runs: 0, wickets: 0 }
  }));
}

