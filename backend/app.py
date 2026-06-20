from flask import Flask, request, jsonify
from feature_extractor import extract_features

app = Flask(__name__)

@app.route("/")
def home():
    return "Backend Running"


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    if not data or "url" not in data:
        return jsonify({
            "error": "No URL provided"
        }), 400

    url = data["url"]

    features = extract_features(url)

    print("\nFeatures Extracted:")
    print(features)

    result = "Legitimate"

    if (
        features["url_length"] > 75 or
        features["has_ip"] == 1
    ):
        result = "Suspicious"

    return jsonify({
        "url": url,
        "prediction": result,
        "features": features
    })


if __name__ == "__main__":
    app.run(debug=True)