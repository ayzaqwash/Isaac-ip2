$(document).ready(function () {
    $("#calc").submit(function (event) {
        event.preventDefault();
        const fd = new FormData(this);
        const dob = new Date(fd.get("birthday"));
        const day1 = dob.getDay();
        const male = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Koffi", "Kwame"];
        const female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        if (fd.get("gender") === "male") {
            alert("Your Akan name is " + male[day1]);
        } else {
            alert("Your akan name is " + female[day1]);
        }
    })
})