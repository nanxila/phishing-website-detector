from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Backend Running"

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json
    url = data["url"]

    result = "Legitimate"

    if "@" in url or len(url) > 75:
        result = "Suspicious"

    return jsonify({
        "url": url,
        "prediction": result
    })

if __name__ == "__main__":
    app.run(debug=True)