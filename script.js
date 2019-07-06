let user = [];

$(function () {
  user = JSON.parse(localStorage.getItem("userArray"))
  $("tbody").append(JSON.parse(localStorage.getItem("userArray")))
})
$("#save-btn").click(function () {
  var reg = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/

  if ($("#userName").val() == "" || $("#userSurname").val() == "" || $("#userEmail").val() == "" || $("#userCity option:selected").val() == 0) {
    return;
  }
  if (!reg.test($("#userEmail").val())) {
    alert("You must enter valid email address")
    $("#userEmail").focus()
    return
  }

  var html = '<tr class="newTr"><td> ' + $("#userName").val() + '</td><td> ' + $("#userSurname").val() + '</td><td> ' + $("#userEmail").val() + '</td><td> ' + $("#userCity option:selected").text() + '</td><td><button id="delete">DELETE</button></td></tr>'
  var text = $("tbody tr td:nth-child(3)").text()
  text = text.split(" ")
  for (let i = 0; i < text.length; i++) {
    if ($("#userEmail").val() == text[i]) {
      alert("This user was added.Please,check your data")
      return;
    }
  }
  $("tbody").append(html)
  console.log(text)
  user.push(html)
  localStorage.setItem("userArray", JSON.stringify(user))
  $("input").val(" ")
  $("#userCity").val(0)

})

$("table").on("click", "button", function () {
  var tr = $(this).closest("tr").html()
  var index = user.indexOf('<tr class="newTr">' + tr.toString() + '</tr>')
  this.closest("tr").remove()
  user.splice(index, 1)
  localStorage.setItem("userArray", JSON.stringify(user))

})