function analyzePassword() {
  const password = document.getElementById("password").value;
  const strengthBar = document.getElementById("strengthBar");
  const strengthText = document.getElementById("strengthText");
  const suggestion = document.getElementById("suggestion");

  
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^a-zA-Z0-9]/.test(password)
  };

  
  for (const [id, valid] of Object.entries(checks)) {
    document.getElementById(id).className = valid ? "valid" : "invalid";
  }

  
  const passedChecks = Object.values(checks).filter(Boolean).length;


  const levels = [
    { label: "Very Weak", color: "red", width: "20%" },
    { label: "Weak", color: "orangered", width: "40%" },
    { label: "Moderate", color: "orange", width: "60%" },
    { label: "Strong", color: "yellowgreen", width: "80%" },
    { label: "Very Strong", color: "green", width: "100%" }
  ];

  const level = levels[passedChecks - 1] || { label: "", color: "#444", width: "0%" };

  strengthBar.style.width = level.width;
  strengthBar.style.backgroundColor = level.color;
  strengthText.textContent = level.label;


  const suggestions = [];
  if (!checks.length) suggestions.push("Use 8+ characters");
  if (!checks.uppercase) suggestions.push("Add uppercase letters");
  if (!checks.lowercase) suggestions.push("Add lowercase letters");
  if (!checks.number) suggestions.push("Add numbers");
  if (!checks.special) suggestions.push("Add symbols");

  suggestion.textContent = suggestions.length
    ? "Try this: " + suggestions.join(", ")
    : "Password looks good!";
}


function togglePassword() {
  const field = document.getElementById("password");
  field.type = field.type === "password" ? "text" : "password";
}
