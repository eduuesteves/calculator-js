const output = document.getElementById("output");
const history = document.getElementById("history");
const themeToggle = document.getElementById("theme-toggle");

function insert(num) {
  output.value += num;
}

function clean() {
  output.value = "";
  history.innerText = "";
}

function remover() {
  output.value = output.value.slice(0, -1);
}

function total() {
  try {
    const result = eval(output.value);
    if (result !== undefined) {
      history.innerText = output.value + " =";
      output.value = result;
    }
  } catch {
    output.value = "Erro";
  }
}

document.addEventListener("keydown", (e) => {
  const allowed = "0123456789+-*/.%";
  if (allowed.includes(e.key)) insert(e.key);
  else if (e.key === "Enter") total();
  else if (e.key === "Backspace") remover();
  else if (e.key === "Escape") clean();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});
