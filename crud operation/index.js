//crud crud link
const crudcrud = "https://crudcrud.com/api/463f2afa45c74ccaa17be32546bec2e9";

const form = document.getElementById("form");
const fullname = document.getElementById("fname");
const email = document.getElementById("mail");
form.addEventListener("click", submit);
function submit(e) {
  if (e.target.id == "submitbtn") {
    e.preventDefault();
    if (fullname.value == "" || email.value == "") {
      const msg = document.getElementById("msg");
      msg.innerHTML = "<b>Enter All Fields</b>";
      msg.style.color = "red";
      setTimeout(() => msg.remove(), 3000);
    } else {
      const obj = {
        name: fullname.value,
        email: email.value,
      };
      fullname.value = "";
      email.value = "";
      //adding user to crudcrud using axios
      //DISPLAY USERDETAIL IN FRONTEND USING ul ELEMENT
      //once details are added then only showUser is called.
      addUserdetails(obj).then((id) => {
        showUser(obj, id);
      });
    }
  }
}

// adding user to crudCrud using axios
async function addUserdetails(obj) {
  let id;
  await axios
    .post(`${crudcrud}/appointmentApp`, obj)
    .then((res) => {
      id = res.data._id;
    })
    .catch((err) => console.log(err));
  return Promise.resolve(id);
}

//getting Data from crud crud and displaying on frontend
function displayUser() {
  axios
    .get(`${crudcrud}/appointmentApp`)
    .then((res) => {
      res.data.forEach((obj) => {
        showUser(obj, obj._id);
      });
    })
    .catch((err) => console.log(err));
}

document.addEventListener("DOMContentLoaded", () => {
  displayUser();
});

//showing new user in frontend
//DISPLAY USERDETAIL IN FRONTEND USING ul ELEMENT
//before adding to frontend check once
function showUser(obj, id) {
  check(obj.email);
  const userDetail = document.getElementById("users");
  const newelement = document.createElement("li");
  newelement.innerHTML = `${obj.name} : ${obj.email} 
        <button onclick=editUser('${id}')> edit</button>
        <button onclick=deleteUser('${id}')> delete</button>`;
  userDetail.appendChild(newelement);
}

//Deletion of user details from frontend when email is overridden
function check(email) {
  const ul = document.getElementById("users");
  for (let i = 0; i < ul.children.length; i++) {
    if (ul.children[i].textContent.indexOf(email) != -1)
      ul.removeChild(ul.children[i]);
  }
}

function deleteUser(id) {
  const ul = document.getElementById("users");
  ul.removeChild(event.target.parentElement);
  // for removing from crudcrud
  axios
    .delete(`${crudcrud}/appointmentApp/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function editUser(id) {
  const ul = document.getElementById("users");
  ul.removeChild(event.target.parentElement);

  axios
    .get(`${crudcrud}/appointmentApp/${id}`)
    .then((res) => {
      fullname.value = res.data.name;
      email.value = res.data.email;
      axios
        .delete(`${crudcrud}/appointmentApp/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}
