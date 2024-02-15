var array = [
  {
    title: "fruits",
    img: "https://plus.unsplash.com/premium_photo-1676642620899-990bd0163cb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZydWl0fGVufDB8fDB8fHww",
  },
  {
    title: "apple",
    img: "https://plus.unsplash.com/premium_photo-1675964349731-e7710eaebf8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8fDB8fHww",
  },
  {
    title: "vegetables",
    img: "https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "onion",
    img: "https://images.unsplash.com/photo-1594100585695-cedca5d7893a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG9uaW9ufGVufDB8fDB8fHww",
  },
  {
    title: "pizza",
    img: "https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "burger",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww",
  },
  {
    title: "chicken",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww",
  },
];

function displayTheCard() {
  var clutter = "";
  array.forEach((obj) => {
    clutter += ` <div class="box">
    <img class="cursor-pointer" src="${obj.img}" alt="image">
    <div class="caption">Lorem ipsum </div>
</div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}

var input = document.querySelector("#searchinput");
function searchoverlayhidden() {
  input.addEventListener("focus", () => {
    document.querySelector("#search").style.display = "block";
    document.querySelector(".searchdata").style.display = "block";
  });
  input.addEventListener("blur", () => {
    document.querySelector("#search").style.display = "none";
    document.querySelector(".searchdata").style.display = "none";
  });

  input.addEventListener("input", () => {
    const filteArrray = array.filter((obj) => {
      return obj.title.toLocaleLowerCase().startsWith(input.value);
    });
    var clutter = "";
    filteArrray.forEach((obj) => {
      clutter += `<div class="res flex px-8 py-3">
      <i class="ri-search-line font-semibold mr-5"></i>
      <h3 class="font-semibold">${obj.title}</h3>
  </div>`;
    });
    document.querySelector(".searchdata").innerHTML = clutter;
  });
}

searchoverlayhidden();
displayTheCard();
