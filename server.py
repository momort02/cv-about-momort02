from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/track', methods=['POST'])
def track():
    data = request.json
    with open("localisation.txt", "a") as f:
        f.write(json.dumps(data) + "\n")
    return {"status": "ok"}

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
