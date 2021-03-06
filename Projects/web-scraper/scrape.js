// Extract actors list on a keypress event.
document.addEventListener("keypress", function() {
  // Select the table element with cast_list CSS class
  let table = document.querySelector("table.cast_list");

  // Select all character rows from the table
  let rows = table.querySelectorAll("tr.odd, tr.even");

  // Clear console before printing the scrapped list
  console.clear();

  // Loop through all table rows.
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    // Extract actor name from the row. The actor row are in span element with an attribute named itemprop
    // The actor name is in the inner HTML.
    let actor = row.querySelector("[itemprop=actor] a span").innerHTML;

    // Select the character row. The character row is a td element with CC class named character.
    let characterTag = row.querySelector("td.character");
    let character;

    // The character is either in an anchor tag or without the anchor.
    let a = characterTag.querySelector("a");

    if (a != null) {
      // If the anchor element is present, the character name is within the anchor tag.
      character = a.innerHTML;
    } else {
      // Otherwise the character is directly within the character tag.
      character = characterTag.innerHTML;
    }

    // Print the Actor and character names
    console.log("Actor: " + actor.trim() + ", Character: " + character.trim());
  }
});
