
function changeURL() {
  chrome.tabs.query({'active' : true}, function(tabs) {
    alert("Current URL:  " + tabs[0].title);
    chrome.tabs.update(tabs[0].id, {url: "http://www.google.com"});
  });
} 

document.getElementById('changeLink').addEventListener('click', function() {
    changeURL();
});


document.addEventListener('DOMContentLoaded', function() {  
    console.log("Document is loading");
});