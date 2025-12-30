function copyPrompt(id) {
  const el = document.getElementById(id);

  // Create temporary textarea (works for very large text)
  const textarea = document.createElement("textarea");
  textarea.value = el.innerText;

  // Avoid scrolling jump
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.opacity = "0";

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    const success = document.execCommand("copy");
    if (success) {
      showCopyFeedback(el);
    } else {
      alert("Copy failed. Please copy manually.");
    }
  } catch (err) {
    alert("Copy failed. Please copy manually.");
  }

  document.body.removeChild(textarea);
}

function showCopyFeedback(el) {
  let badge = document.createElement("div");
  badge.innerText = "✓ Prompt copied";
  badge.className = "copy-badge";

  el.parentElement.appendChild(badge);

  setTimeout(() => badge.remove(), 2000);
}
