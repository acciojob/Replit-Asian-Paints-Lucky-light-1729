document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all grid blocks to transparent
  document.querySelectorAll(".grid-item").forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  const targetBlock = document.getElementById(blockId);
  if (targetBlock && targetBlock.classList.contains("grid-item")) {
    targetBlock.style.backgroundColor = color;
  } else {
    alert("Please enter a valid block ID (1-9).");
  }
});

document.getElementById("reset_button").addEventListener("click", function () {
  document.querySelectorAll(".grid-item").forEach(item => {
    item.style.backgroundColor = "transparent";
  });
});
