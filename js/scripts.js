$(document).ready(function() {
  $("#answer form").submit(function(event) {
    var name = $("input#nameInput").val();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    $(".nameInput").text(name);
    $(".beverageInput").text(beverage);
    $(".foodInput").text(flavor);
    $("#output").show();

    event.preventDefault();

  });
});
