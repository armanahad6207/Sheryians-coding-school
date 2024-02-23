var product = [
  {
    name: "White Chair",
    headline: "Enjoy whit your happyness",
    price: 12000,
    img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Pink Chair",
    headline: "clowear Joyfull",
    price: 4000,
    img: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Vintage Chair",
    headline: "Old feelings",
    price: 5600,
    img: "https://images.unsplash.com/photo-1562113530-57ba467cea38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "King Chair",
    headline: "like A Roar",
    price: 9200,
    img: "https://images.unsplash.com/photo-1601392740426-907c7b028119?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww",
  },
];

function showCard() {
  clutter = "";
  product.forEach((obj) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
  <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
  <img class="w-full h-full object-cover " src="${obj.img}"/>
  </div>
  <div class="data w-full px-2 py-5">
    <h1 class="font-semibold text-xl leading-none tracking-tight">
     ${obj.headline}
    </h1>
    <div class="flex justify-between w-full items-center mt-2">
      <div class="w-1/2">
        <h3 class="font-semibold opacity-20">${obj.name}</h3>
        <h4 class="font-semibold mt-2">${obj.price}</h4>
      </div>
      <button class="w-10 h-10 rounded-full shader text-yellow-400">
        <i class="ri-add-line"></i>
      </button>
    </div>
  </div>
</div>`;
  });

  document.querySelector(".products").innerHTML = clutter;
}
showCard();
