var dataInfo = false;

function check(e, inputValue) {
    const nameErr = document.getElementById("error1");
    const passErr = document.getElementById("error2");
    const emailErr = document.getElementById("error3");

    if (inputValue === "name") {
        var userName = e.target.value;
        console.log(userName);

        if (userName.length < 3) {
            nameErr.innerText = "Name should be at least 3 characters.";
            nameErr.style.display = "block";
            return;
        }
        nameErr.style.display = "none";
    }

    if (inputValue === "id") {
        var password = e.target.value;
        console.log(password);

        if (password.length < 4) {
            passErr.innerText = "Give Proper ID.";
            passErr.style.display = "block";
            return;
        }
        passErr.style.display = "none";
    }

    if (inputValue === "gmail") {
        var gmail = e.target.value;
        console.log(gmail);

        if (gmail.indexOf('@') === -1) {
            emailErr.innerText = "Give Proper Gmail.";
            emailErr.style.display = "block";
            return;
        }
        emailErr.style.display = "none";
    }

    dataInfo = true;
}

function checkForm(e) {
    e.preventDefault(); 
    var displayPannel = document.getElementsByClassName('displayResult')[0]
    var userName = document.getElementById("input1").value.toLowerCase();
    var userId = document.getElementById("input2").value;
    var userGmail = document.getElementsByClassName("new")[0].value.toLowerCase();

    if (!dataInfo) {
        alert("Please correct the errors before proceeding.");
        return;
    }

    for (let i = 0; i < students.length; i++) {
        if (
            students[i].name === userName && String(students[i].id) === userId && students[i].gmail === userGmail) {
            alert("found")
                displayPannel.innerHTML= `<table> ,
                <tr>
                <th> Student Name </th>
                <th> Student ID </th>
                <th> Student Gmail </th>
                </tr>
                
                <tr>
                <td>${students[i].name}</td
                <td>${String(students[i].id)}</td
                <td>${students[i].gmail}</td
                
                </tr>
                
                
                </table>`
        
            return;
        }
    }

    alert("Not Found!");
}

const students = [
    { name: "sheeraz", id: 1001, gmail: "sheerazahmed@gmail.com" },
    { name: "sandal ", id: 1002, gmail: "sandalhussain@gmail.com" },
    { name: "ishaq", id: 1003, gmail: "muhammadishaq@gmail.com" },
    { name: "ayan", id: 1004, gmail: "muhammadayan@gmail.com" },
    { name: "usman", id: 1005, gmail: "muhammadusman@gmail.com" },
    { name: "zakir", id: 1006, gmail: "zakir@gmail.com" },
    { name: " afnan", id: 1007, gmail: "syedafnan@gmail.com" },
    { name: "faraz", id: 1008, gmail: "farazabdullah@gmail.com" },
    { name: "fawad", id: 1009, gmail: "fawadkhan@gmail.com" },
    { name: "amir memon", id: 1010, gmail: "amirmemon@gmail.com" }
];
