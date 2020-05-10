
const alertField = document.getElementById('alert');

export default function showError(error) {
  alertField.insertAdjacentText("beforeend", error)
  alertField.style.display = "block";
}
export function hideError() {
  alertField.lastChild.textContent = '';
  alertField.style.display = "none";
}

