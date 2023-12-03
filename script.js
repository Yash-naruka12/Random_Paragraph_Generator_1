let data = document.getElementById("data");
let container = document.querySelector(".container");

let wordgenerate = (num) => {
  let inputdata = "";
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < num; i++) {
    let random = Math.floor(Math.random() * 10);
    inputdata += letters[random];
  }
  return inputdata;
};

let userdata;
let addpara = () => {
  userdata = Number(data.value);

  let storedata = "";
  for (let i = 0; i < userdata; i++) {
    let randomnumber = Math.floor(Math.random() * 15);
    storedata += wordgenerate(randomnumber);
    storedata += " ";
  }

  let para = document.createElement("p");
  //   para.setAttribute("class", "paras");
  para.innerHTML = storedata;
  container.append(para);
};
