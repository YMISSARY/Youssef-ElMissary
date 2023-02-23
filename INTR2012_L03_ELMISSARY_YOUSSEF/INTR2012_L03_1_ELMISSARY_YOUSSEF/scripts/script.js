//1. Create a function called validateForm that takes no parameters
//2. Inside the validateForm function, get the value of the username, email, and password input fields.
function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//3. Use if-else statements to validate each input field. The validation rules are as follows:  
//4. The username field must not be empty, and must contain only letters and numbers.
//5. The email field mustnot be empty, and must contain '@' character. (Bonus points for REGEX validation)
//6. The password field must not be empty, and must be at least 8 characters long
//7. If all input fields are valid, console.log a message to the user saying "Form submitted successfully". If any input field is invalid, console.log a message to the user saying "Form submission failed".

    if (username === "" || !usernameRegex.test(username)) {
      console.log("Form submission failed: Invalid username");
    } else if (email === "" || !email.includes("@") || !emailRegex.test(email)) {
      console.log("Form submission failed: Invalid email");
    } else if (password === "" || password.length < 8) {
      console.log("Form submission failed: Invalid password");
    } else {
      console.log("Form submitted successfully");
    }
  }


//1. Declare an array products that contains at least 10 products. Each product should be a string that represents the name of the product.
//2. Use a loop to display the list of products to the user. Each product should be displayed in a list item (<li>) element. The list should be displayed in an unordered list (<ul>) element.
//3. Create a function searchProducts that takes a string parameter query and returns an array of products that match the query. The function should search for products that contain the query in their name, and should be case-insensitive.
//4. Create an input field on the web page that allows the user to enter a search query. Use an event listener to call the searchProducts function whenever the user types in the input field.
//5. Use another loop to display the filtered list of products to the user. The filtered list should only include the products that match the search query.

