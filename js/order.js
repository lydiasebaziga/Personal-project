

const form = document.getElementById("form");
const div = document.querySelector(".messageorder");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(form);
    const dataObj = Object.fromEntries(data.entries());

    console.log("our data:", dataObj);

    form.reset();


    let name = dataObj.name;
    let email = dataObj.email;
    let tel = dataObj.phone;
    let buying = dataObj.toppings;
    // let return = dataObj.toppings;
    let favoritecloths = dataObj.cloths;
    let comment = dataObj.comments;

    let story = ` Thank you ${name}! We appreciate your interest in ${buying}. Your cloth is ${favoritecloths} and your comments are ${comment}. We will soon contact you at ${email} or ${tel}`;

    let message = document.createElement("p");
    message.textContent = story;
    div.appendChild(message);

    form.style.display = "none";

    console.log(story);
    
}