import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deletFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const addIncompleteList = (text) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const warpTarget = completeButton.parentNode;
    deletFromIncompleteList(warpTarget.parentNode);

    const addTarget = completeButton.parentNode;
    const addTarget2 = addTarget.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // addTarget2.textContent = null;

    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      const deleteTarget2 = deleteTarget.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget2);

      const text = backButton.parentNode.firstElementChild.innerText;
      addIncompleteList(text);
    });

    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);
    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deletFromIncompleteList(deleteTarget.parentNode);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(li);
};
