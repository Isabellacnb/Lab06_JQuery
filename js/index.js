$(".agregar").on("click", function (e) {
  e.preventDefault();
  var listItem = $("#newText");

  $(".Lista").append(
    `
    <li class="lis">
    <p class="itemText">${listItem.val()}</p>
    
    <button class="checar">check</button>
    <button class="del">delete</button></li>`
  );
  listItem.val("");
});

$(".Lista").on("click", ".checar", function () {
  console.log($(this).parent().find(".itemText"));
  $(this).parent().find(".itemText").toggleClass("chec");
});

$(".Lista").on("click", ".del", function () {
  $(this).parent().remove();
});
