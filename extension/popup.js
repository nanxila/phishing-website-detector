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
.addEventListener("click", async () => {

    document.getElementById("result")
        .textContent = "Analyzing...";

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/predict",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: currentUrl
                })
            }
        );

        const data = await response.json();

        document.getElementById("result")
            .textContent =
            data.prediction;

    } catch(error){

        document.getElementById("result")
            .textContent =
            "Backend not running";
    }
});