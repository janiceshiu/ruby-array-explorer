$(document).ready(function(){
  initHide();

  function initHide() {
    hideSecondSelectorChildren();
    hideDocumentation();
  }

  function hideDocumentation() {
    $("#documentation").hide();
  }

  $("#first-selector").change(function() {
    resetFirstSelector(this.value);
  });

  function resetFirstSelector(selectedVal) {
    hideSecondSelectorChildren();
    hideDocumentation();
    $("#second-selector #" + selectedVal ).show();
    $("#code").html(" # Create an array<br>numbers = [1, 2, 3] #=> [1, 2, 3]")
    highlightCode();
  }

  function highlightCode() {
    $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
  };

  function hideSecondSelectorChildren() {
    $("#second-selector").children().hide();
  }

  // when #second-selector children change
  $("#sel-add").change(function() {
    updateInfo('add', this.value);
  })

  function updateInfo(category, itemName) {
    updateCode(category, itemName);
    showDocumentation();
    highlightCode();
    updateDocumentation(category, itemName);
  }

  function updateCode(category, itemName) {
    $("#code").html(explorerData['en'][category][itemName]['text']);
  }

  function showDocumentation(){
    $("#documentation").show();
  }

  function updateDocumentation(category, itemName) {
    var selectedItem = explorerData['en'][category][itemName];
    var elem = [];
    elem[0] = "<h2 id='doc-title'>Array." + selectedItem['name'] + '</h2>';
    elem[1] = '<div>' + selectedItem['desc'] + '</div>';

    elem[2] = "<a href='https://ruby-doc.org/core-2.5.0/Array.html#method-i-" + selectedItem['link_name'] + "' id='doc-link' target='_blank'>see the docs →</a>";
    text = elem.join('');

    $('#documentation').html(text);
  }
});
