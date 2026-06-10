function searchPlace() {

    let input =
        document.getElementById("search")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".card");

    cards.forEach(card => {

        let place =
            card.dataset.place;

        if (place.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

function toggleMode() {
    document.body.classList.toggle("dark");
}