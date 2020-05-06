
export default function showError(error) {
    const fieldSet = document.querySelector('.form-group');
    fieldSet.insertAdjacentHTML ("beforeEnd", `
<div class="alert alert-danger" role="alert">
  ${error.message}
</div>
`)
}