// UI Logic

function handleTriangleForm() {
  event.preventDefault();
  document.querySelector("#response").innerText = null;
  const length1 = parseInt(document.querySelector("#length1").value);
  const length2 = parseInt(document.querySelector("#length2").value);
  const length3 = parseInt(document.querySelector("#length3").value);
  const triangle = new Triangle(length1, length2, length3);
  const response = triangle.checkType();
  const pTag = document.createElement("p");
  pTag.append(response);
  document.querySelector("#response").append(pTag);
}

window.addEventListener("load", function() {
  this.document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
});