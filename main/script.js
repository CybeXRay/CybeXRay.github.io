// Attach a click event listener to the "search-button" element
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");

  // Initialize a variable to store search results
  let searchResults = "";

  if (searchButton) {
    searchButton.addEventListener("click", function () {
      // Create a custom alert box
      const alertBox = document.createElement("div");
      alertBox.className = "custom-alert";

      // Create the text element with bold styling
      const textElement = document.createElement("div");
      textElement.textContent = "Search Wizard"; // Change the text to "Search Wizard"
      textElement.style.color = "blue";
      textElement.style.fontWeight = "bold";
      textElement.style.marginBottom = "10px"; // Add margin for spacing

      // Create buttons
      const minimizeButton = document.createElement("button");
      minimizeButton.textContent = "Minimize";
      minimizeButton.addEventListener("click", function () {
        // Hide the alert box
        alertBox.style.display = "none";
      });

      const previousButton = document.createElement("button");
      previousButton.textContent = "Previous";

      const findButton = document.createElement("button");
      findButton.textContent = "Find";
      findButton.addEventListener("click", function () {
        // Get the user input from the input field
        const userInput = searchInput.value.trim();

        // Clear the existing content of the rich text box
        richTextBox.innerHTML = "";

        // Create a paragraph element for the output
        const outputParagraph = document.createElement("p");

        // Check if the user input is blank
        if (userInput === "") {
          // Display a message for empty input in blue color
          outputParagraph.textContent = "Please enter a search keyword";
          outputParagraph.style.color = "blue";
        } else {
          // Display the output text in blue color
          outputParagraph.textContent = "Work in Progess!!";
          outputParagraph.style.color = "blue";
        }

        // Store the search results
        searchResults = outputParagraph.outerHTML;

        // Append the output paragraph to the rich text box
        richTextBox.appendChild(outputParagraph);
      });

      const nextButton = document.createElement("button");
      nextButton.textContent = "Next";

      const closeButton = document.createElement("button");
      closeButton.textContent = "Close";
      closeButton.addEventListener("click", function () {
        // Clear the search results variable
        searchResults = "";

        // Close the alert box
        document.body.removeChild(alertBox);
      });

      // Add a line of blank space
      const blankSpace1 = document.createElement("div");
      blankSpace1.style.height = "20px"; // Adjust the height as needed

      // Create the user input field
      const searchInput = document.createElement("input");
      searchInput.type = "text";
      searchInput.placeholder = "Search:";
      searchInput.style.width = "75%"; // Set the width to 75%

      // Add a line of blank space
      const blankSpace2 = document.createElement("div");
      blankSpace2.style.height = "20px"; // Adjust the height as needed

      // Create the "Search Results:" text element
      const searchResultsText = document.createElement("div");
      searchResultsText.textContent = "Search Results:";
      searchResultsText.style.color = "blue";
      searchResultsText.style.textAlign = "left";

      // Add a line of blank space
      const blankSpace3 = document.createElement("div");
      blankSpace3.style.height = "20px"; // Adjust the height as needed

      // Create the rich text box for hyperlinks
      const richTextBox = document.createElement("div");
      richTextBox.style.overflowY = "auto";
      richTextBox.style.height = "calc(100% - 30px - 160px)"; // Adjust the height accordingly
      richTextBox.style.padding = "5px";
      richTextBox.style.border = "1px solid #ccc";

      // Append text, buttons, blank spaces, input field, "Search Results:" text, and rich text box to the alert box
      alertBox.appendChild(textElement);
      alertBox.appendChild(minimizeButton);
      alertBox.appendChild(previousButton);
      alertBox.appendChild(findButton);
      alertBox.appendChild(nextButton);
      alertBox.appendChild(closeButton);
      alertBox.appendChild(blankSpace1);
      alertBox.appendChild(searchInput);
      alertBox.appendChild(blankSpace2);
      alertBox.appendChild(searchResultsText);
      alertBox.appendChild(blankSpace3);
      alertBox.appendChild(richTextBox);

      // Style the alert box
      alertBox.style.position = "fixed";
      alertBox.style.top = "50%";
      alertBox.style.left = "50%";
      alertBox.style.transform = "translate(-50%, -50%)";
      alertBox.style.width = "75%";
      alertBox.style.height = "75%";
      alertBox.style.padding = "20px";
      alertBox.style.background = "#fff";
      alertBox.style.border = "1px solid #ccc";
      alertBox.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
      alertBox.style.textAlign = "center";
      alertBox.style.zIndex = "9999";

      // Append the alert box to the body
      document.body.appendChild(alertBox);

      // Populate the rich text box with stored search results (if any) when reopening
      if (searchResults !== "") {
        const outputParagraph = document.createElement("p");
        outputParagraph.innerHTML = searchResults;
        richTextBox.appendChild(outputParagraph);
      }
    });
  }
});