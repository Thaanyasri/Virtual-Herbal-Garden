from flask import Flask, request, jsonify
from some_ml_library import identify_plant  # Placeholder for ML model

app = Flask(__name__)

@app.route('/detect-plant', methods=['POST'])
def detect_plant():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image = request.files['image']

    # Process image and identify plant
    plant_name = identify_plant(image)  # Example function from ML model

    # Example plant data
    plant_data = {
        "Tulsi": {
            "botanicalName": "Ocimum sanctum",
            "benefits": "Boosts immunity, fights infections, reduces stress"
        },
        "Neem": {
            "botanicalName": "Azadirachta indica",
            "benefits": "Cleanses blood, treats acne, controls diabetes"
        },
        "Aloe Vera": {
            "botanicalName": "Aloe barbadensis miller",
            "benefits": "Heals wounds, aids digestion, moisturizes skin"
        }
    }

    if plant_name in plant_data:
        return jsonify({
            "name": plant_name,
            "botanicalName": plant_data[plant_name]["botanicalName"],
            "benefits": plant_data[plant_name]["benefits"]
        })
    else:
        return jsonify({"error": "Plant information not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
