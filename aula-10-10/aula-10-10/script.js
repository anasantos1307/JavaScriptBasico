const person = {
    firstName: "",
    lastName: "",
    email: "",

    setDetails(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    },

    displayDetails(){
        document.getElementById("displayFirstName").textContent = this.firstName;
        document.getElementById("displayLastName").textContent = this.lastName;
        document.getElementById("displayEmail").textContent = this.email;
    }
};

const form = document.getElementById("personForm");

form.addEventListener("submit", function (e){
    
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    person.setDetails(firstName, lastName, email);

    person.displayDetails();

});
