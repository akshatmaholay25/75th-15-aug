var Input = prompt("want to visit the creator of this website: answer 'yes' or 'no'");

if (Input.trim() != "" && Input == "yes") {
  location.href = "https://akshat-maholay.netlify.app/";
}
else {
  alert("Fail!");
}