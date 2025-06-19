document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all grid items to transparent
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // Change selected grid block's color
  const target = document.getElementById(blockId);
  if (target && target.classList.contains("grid-item")) {
    target.style.backgroundColor = color;
  } else {
    alert("Invalid block ID. Please enter a number from 1 to 9.");
  }
});

document.getElementById("reset_button").addEventListener("click", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });
});
