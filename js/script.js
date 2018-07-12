$(document).ready(function(){
$("form").submit(function(event){
  event.preventdefault;
  var nostr=$("input#input1").val();
  var weko=nostr.split(",");
  alert(weko[2]);
});
});
