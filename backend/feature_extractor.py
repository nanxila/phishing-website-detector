from urllib.parse import urlparse
import re

def extract_features(url):

    features = {}

    features["url_length"] = len(url)

    features["dot_count"] = url.count(".")

    features["hyphen_count"] = url.count("-")

    features["digit_count"] = sum(
        c.isdigit() for c in url
    )

    features["has_https"] = (
        1 if url.startswith("https") else 0
    )

    ip_pattern = r'\d+\.\d+\.\d+\.\d+'

    features["has_ip"] = (
        1 if re.search(ip_pattern, url)
        else 0
    )

    return features