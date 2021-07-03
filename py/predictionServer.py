from flask import Flask, render_template, request, redirect, url_for, make_response, jsonify
from werkzeug.utils import secure_filename
from werkzeug.datastructures import FileStorage
import requests, os, sys, json, time
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
	
@app.route('/getPrediction', methods = ['GET'])
def return_prediction():
   res = make_response(jsonify({"result": predictedMaterial}), 200)
   return res

@app.route('/determine', methods = ['GET', 'POST'])
def upload_file():
   print("upload_file")
   data = dict(request.files)
   path = data["attachment"]
   path.save(secure_filename(path.filename))
   global predictedMaterial
   predictedMaterial = predictMaterial(path.filename);
   print("Completed: " + predictedMaterial)
   return redirect("http://localhost:8000/")

def predictMaterial(filename):
   model_id = os.environ.get('NANONETS_MODEL_ID')
   api_key = os.environ.get('NANONETS_API_KEY')
   url = 'https://app.nanonets.com/api/v2/ObjectDetection/Model/' + model_id + '/LabelFile/'
   label = "Unknown";

   image_path = filename
   data = {'file': open(image_path, 'rb'),    'modelId': ('', model_id)}
   response = requests.post(url, auth=requests.auth.HTTPBasicAuth(api_key, ''), files=data)


   json_response = json.loads(response.text)
   print(json_response)
   for type in json_response["result"]:
      for prediction in type["prediction"]:
         label = prediction["label"]
         break

   return label


if __name__ == '__main__':
   app.run(host='0.0.0.0', debug = True)