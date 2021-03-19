const alertField = document.getElementById('alert');

export default function showError(error) {
  alertField.lastChild.textContent = '';
  alertField.insertAdjacentText("beforeend", error)
  alertField.style.display = "block";
  return error;
}
export function hideError() {
  alertField.lastChild.textContent = '';
  alertField.style.display = "none";
}
export function showErrorEmptyInput() {
  alertField.lastChild.textContent = '';
  alertField.insertAdjacentText("beforeend", `Can't find empty movie title`)
  alertField.style.display = "block";
}
