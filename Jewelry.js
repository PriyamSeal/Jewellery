const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});





// function check_info()

// {

// var username=document.getElementById("username").value;
// var password=document.getElementById("password").value;

//     if(username == "user1" && password == "123456")

//       {
//         alert("Login Successful");
//         return false;
//       }

//       else
//       { 
//         alert("checkpassword"); 
//       }

//   } 




