const bulb = document.getElementById("bulb");
const h1 = document.getElementById("h1-id");
const p1 = document.getElementById("p-id");

const button = document.getElementById("toggleButton");
console.log(button.textContent);

const status = document.getElementById("status");
console.log(status.textContent);

button.addEventListener("click", function () {
  if (button.textContent == "Turn On") {
    button.textContent = "Turn Off";
    button.innerHTML = "Turn Off";
    // bulb.style.backgroundColor="#f1c40f"
    let brightness = 0;
    interval = setInterval(() => {
      brightness += 5;
      bulb.style.backgroundColor = `rgb(241, 196, 15, ${brightness / 100})`;
      bulb.style.boxShadow = `0px 0px ${brightness}px ${
        brightness / 3
      }px rgba(241, 196, 15, ${brightness / 100})`;

      if (brightness >= 100) clearInterval(interval);
    }, 50);

    document.body.style.backgroundColor = "black";
    h1.style.color = "white";
    p1.style.color = "white";
    status.textContent = "Status: On";
    status.style.color = "white";
  } else if (button.textContent == "Turn Off") {
    button.textContent = "Turn On";
    bulb.style.backgroundColor = " #95a5a6";
    document.body.style.backgroundColor = "white";
    h1.style.color = "black";
    p1.style.color = "black";
    status.textContent = "Status: Off";
    status.style.color = "black";
  }
});
