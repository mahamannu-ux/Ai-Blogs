function copyPrompt(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text)
    .then(() => alert("Prompt copied to clipboard"))
    .catch(() => alert("Copy failed"));
}
