/*
You will create a page that looks like this desktop design screenshot: https://assets.codepen.io/t-15440/itp-w11-signup-desktop-design.jpg


HTML Structure
1. Remember to think about parents and children as you plan your layouts
  1. You may want to annotate the design to identify your elements, structure and layout. Going this will make Grid easier to work with
  2. You may also pseudocode to plan everything out in plain English before starting to code
2. Read the HTML content and mark it up with the correct tags
3. The words "Terms and Services" are a link and should be marked up as such. You can link it to any website of your choice
4. Make email and password fields of the form required


CSS Styles
1. Colors, font, and the background image are pre-configured for you in the CodePen
2. Add the rest of the styles as shown in the design.
3. The screenshot shows the design at 1440px wide screen. It's likely that you have a smaller screen which will make the padding and spacing look a little different. Try to get as close as possible to the design but it might not be exact and that's okay!


JavaScript Functionality 
1. Create a submit function using boilerplate code
2. The form data should show in the console when the user clicks the "Claim Your Free Trail" button


Bonus
1. Add responsive design to your code to create a mobile layout
2. Mobile design Screenshot: https://assets.codepen.io/t-15440/itp-w11-signup-mobile-design.jpg
*/
const form = document.querySelector(".form");
form.addEventListener("submit", onFormSubmit);
let ordersList = [];

function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  ordersList.push(dataObject);
  console.log(dataObject);
  console.log(ordersList);
  form.reset();
}
