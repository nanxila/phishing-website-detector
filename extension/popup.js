let currentUrl = "";

chrome.tabs.query(
{
    active: true,
    currentWindow: true
},
function(tabs){

    currentUrl = tabs[0].url;

    document.getElementById("url").textContent =
        currentUrl;
}
);

document
.getElementById("analyzeBtn")
.addEventListener("click", () => {

    document.getElementById("result")
        .textContent =
        "Analysis coming soon...";
});