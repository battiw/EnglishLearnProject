function clickMeStartСheck() {
  console.log("запрос GET");
  let createNewElement;
  // let createNewButton;
  // let createInputElement;

  fetch("http://localhost:5555/allTXT")
    .then(
      (response) => response.text(),
      (err) => console.log("Not")
    )
    .then((data) => {
      let inputBlock = document.getElementById("input_block");
      let aaa = document.createElement("div");
      aaa.id = "createText";
      inputBlock.before(aaa);

      aaa.append(data);

      createNewElement = document.createElement("input");
      createNewElement.id = "inputID";

      let createNewButton = document.createElement("button");
      createNewButton.id = "buttonID";
      createNewButton.innerText = "CHECK";

      inputBlock.append(createNewElement);
      inputBlock.append(createNewButton);

      createNewButton.onclick = clickMePostText;
    });
}

function clickMePostText() {
  let bbb = document.getElementById("inputID");
  let newElement = bbb.value;
  console.log(`newElement => ${newElement}`); // остается в памяти старое значение

  fetch("http://localhost:5555/textengl", {
    method: "POST",
    headers: {
      "Content-Type": "text/html;charset=utf-8",
    },
    body: newElement,
  })
    .then(
      (response) => response.text(),
      (err) => console.log("Not")
    )
    .then((data) => {
      let tegRes = document.getElementById("outputAll_block");
      let tegCreateRes = document.createElement("div");
      tegRes.append(tegCreateRes);
      tegCreateRes.append(newElement + " => " + data);

      clickMeStartСheck(); // зацикливает функцию
    });
  let ccc = document.getElementById("buttonID");
  let ddd = document.getElementById("createText");

  ddd.remove();
  bbb.remove();
  ccc.remove();
}
