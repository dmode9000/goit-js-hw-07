const categories = document.querySelector("#categories").children;

console.log("Number of categories: ", categories.length);

[...categories].forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("ul > li").length);
});
