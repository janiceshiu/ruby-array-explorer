$(document).ready(function(){
  $("#first-selector").change(function() {
    resetFirstSelector(this.value);
  });

  function resetFirstSelector(selectedVal) {
    hideSecondSelectorChildren();
    $("#second-selector #" + selectedVal ).show();
    $("#code").html(" # Create an array<br>numbers = [1, 2, 3] #=> [1, 2, 3]")
  }

  function hideSecondSelectorChildren() {
    $("#second-selector").children().hide();
  }
});
