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

  // when #second-selector children change
  $("#sel-add").change(function() {
    updateInfo('add', this.value);
  })

  function updateInfo(category, itemName) {
    updateCode(category, itemName);
  }

  function updateCode(category, itemName) {
    $("#code").html(explorerData['en'][category][itemName]['text']);
  }
});
