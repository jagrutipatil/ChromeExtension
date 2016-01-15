
function changeURL() {
  chrome.tabs.query({'active' : true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: "http://www.google.com"});
  });
} 

document.getElementById('changeLink').addEventListener('afterClick', function() {
    changeURL();
});


document.addEventListener('DOMContentLoaded', function() {  

});