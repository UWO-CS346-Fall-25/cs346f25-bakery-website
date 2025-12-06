// Attach event listeners to each button
document.querySelectorAll(".nutr-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const li = event.target.closest("li");//looks at parent li to grab id from
    if (!li) return;

    const itemId = li.dataset.id;

    fetch(`/nutrition/${itemId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Item not found");
        return response.json();
      })
      .then((data) => {
        if (!data) throw new Error("Item not found");

        // takes data from controller and fills the popup
        document.getElementById("popup-title").textContent = data.item_name + " Nutrition Info";
        document.getElementById("popup-info").innerHTML = `
          <ul class="nutrition">
            <li>Calories: ${data.calories}</li>
            <li>Sugar: ${data.sugar}</li>
            <li>Fat: ${data.fat}</li>
            <li>Protein: ${data.protein}</li>
          </ul>
        `;

        // displayes popup
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popup").style.display = "block";
      })
      .catch((err) => alert(err.message));
  });
});

// closes popup
document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
})


