
export default function showError(error) {
    const fieldSet = document.querySelector('.form-group');
    fieldSet.insertAdjacentHTML ("beforeEnd", `<div class="alert alert-danger mr-4 m-2" role="alert" id="alert">
  <button type="button" class="close" data-dismiss="alert" onclick="this.parentNode.remove()">&times;</button>
  ${error.message}</div>`)
}

