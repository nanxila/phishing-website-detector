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

    let result = "Legitimate";

    if (
        currentUrl.includes("@") ||
        currentUrl.length > 75
    ) {
        result = "Suspicious";
    }

    document.getElementById("result")
        .textContent = result;
});