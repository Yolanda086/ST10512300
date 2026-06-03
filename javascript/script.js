document.getElementById("contactForm").addEventListener
("submit", function(event) {
    event.preventDefault();

    document.getElementById("successMessage").innerHTML =
        "<p style='color:#38bdf8; margin-top:15px;'>✓ Thank you! Your message has been sent successfully.</p>";

    document.getElementById("contactForm").reset();
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// About Page

// Team Member Information
function showMemberInfo(name, position, description) {
    alert(
        "Name: " + name +
        "\nPosition: " + position +
        "\n\nAbout:\n" + description
    );
}
function showMemberInfo(name, position, description) {

    document.getElementById("member-info").innerHTML = `
        <h3>${name}</h3>
        <h4>${position}</h4>
        <p>${description}</p>
    `;
}

// Mission and Vision Buttons
function showMission() {
    alert(
        "Our Mission:\nOur mission is to empower our youth living in disadvantaged communities through digital skills training and employement opportunities.To deliver high-quality technology solutions that empower businesses and individuals through innovation and excellence."
    );
}

function showVision() {
    alert(
        "Our Vision:\nTo build a future where every individual has the technical agency and advantage to thrive in digital economy."
    );
}

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });
});

// FAQ Toggle Function

document.addEventListener("DOMContentLoaded", function () {

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(function(question) {

        question.addEventListener("click", function() {

            const answer = this.nextElementSibling;

            if (answer) {
                answer.classList.toggle("show");
            }

        });

    });

});


// Search Function

function searchFAQ() {

    const input = document.getElementById("searchInput").value.toLowerCase();

    const faqCards = document.querySelectorAll(".faq-card");

    faqCards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}
let selectedAmount = 0;

// Select predefined amount
function selectAmount(amount) {

    selectedAmount = amount;

    document.getElementById("customAmount").value = amount;

}

// Donate function
function donate() {

    const customAmount = document.getElementById("customAmount").value;

    const donationAmount = customAmount || selectedAmount;

    if (donationAmount === "" || donationAmount <= 0) {

        alert("Please enter or select a donation amount.");

        return;
    }

    alert(
        "Thank you for your donation of R" +
        donationAmount +
        " to Fuse Techni NPC!"
    );

}
function selectAmount(amount) {

    selectedAmount = amount;

    document.getElementById("customAmount").value = amount;

    const buttons = document.querySelectorAll(".amounts button");

    buttons.forEach(button => {
        button.classList.remove("selected");
    });

    event.target.classList.add("selected");
}

function toggleDescription(card) {

    const descriptions =
        document.querySelectorAll(".service-description");

    descriptions.forEach(desc => {
        if (desc !== card.querySelector(".service-description")) {
            desc.classList.remove("show");
        }
    });

    card.querySelector(".service-description")
        .classList.toggle("show");
}

function showReason(card){

    const descriptions =
        document.querySelectorAll(".reason-description");

    descriptions.forEach(description => {

        if(description !== card.querySelector(".reason-description")){
            description.classList.remove("show");
        }

    });

    card.querySelector(".reason-description")
        .classList.toggle("show");
}
