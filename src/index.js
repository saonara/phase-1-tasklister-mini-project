document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let ulNode = document.querySelector("ul");

  let li = document.createElement("li");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let todo = formData.get("new-task-description");

    if (todo === "") return;

    li.textContent = todo;

    ulNode.appendChild(li);

    form.reset();

    return false;
  });
});
