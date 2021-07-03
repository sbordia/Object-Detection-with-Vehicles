# Object Detection With Cars
This project runs as a web app that gets an image from the user, sends it to a raspberry pi where the image is saved locally, sent to the machine learning model Nanonets, and the details of the image are returned back to the frontend after the web server set up on the raspberry pi calls Nanonet's API. Right now, this project can detect five different types of car models: Acura, Audi, Dodge, Ford, and Hyundai.

## User Flow 
1. User uploads an image of any item, for example, an Audi car
2. User clicks "Submit"
3. User waits 5 seconds for image to reach the pi, for machine learning model to process the data, and for it to send back the results
4. User clicks "Get Result"
5. Output detecting type of car is displayed (in this case, 14. This is an Audi!) 

## Technologies Used 
- Python (Flask, Machine Learning)
- JavaScript (calls our Python API)
- HTML
- CSS
- Bootstrap
- Nanonets
