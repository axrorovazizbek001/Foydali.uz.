function bio() {
  let name = document.getElementById("name").value;

  let texts = [
    `🔥 ${name} | Dream big`,
    `🚀 ${name} | Success mode`,
    `💎 ${name} | Future star`
  ];

  document.getElementById("bioRes").innerText =
    texts[Math.floor(Math.random()*texts.length)];
}

function tags() {
  document.getElementById("tagRes").innerText =
    "#viral #insta #trend #follow #explore";
}
