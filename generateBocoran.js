const fs = require("fs");

const games = [
  {
    title: "Starlight Princess",
    status: "🔥 Gacor",
    spinInfo: "Spin 20x, lalu beli jika muncul bintang berurutan",
    symbols: "⭐ Bintang, Hati, Bulan",
    scatterTips: "Scatter setelah 2x kemunculan simbol biru",
    updated: new Date().toISOString()
  },
  {
    title: "Gates of Olympus",
    status: "✅ Cuan Tipis",
    spinInfo: "30x turbo spin, lalu beli scatter",
    symbols: "⚡ Petir, Mahkota",
    scatterTips: "Tunggu petir 3x muncul dulu",
    updated: new Date().toISOString()
  }
];

fs.writeFileSync("bocoran-games.json", JSON.stringify(games, null, 2));
console.log("✅ bocoran-games.json diperbarui otomatis.");
