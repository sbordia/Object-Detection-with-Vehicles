# Object Detection Model For Cars
I worked on an object detection model using machine learning to accurately predict the type of car, specifically the model of it, when its image is captured and sent by the user to my web app.

| **Engineer** | **School** | **Area of Interest** | **Grade** |
|:--:|:--:|:--:|:--:|
| Sanay Bordia | Archbishop Mitty | Computer Science/Machine Learning | Incoming Junior


![Object Detection with Cars](http://www.nanrussell.com/wp-content/uploads/2016/08/Progress.jpg)

  
# Final Milestone
My final milestone is setting up my server on the raspberry pi instead of my own computer and calling the results from there, which it gets from Nanonets. The concept is the same as Milestone 2, except I was able to successfully integrate my raspberry pi into the project. 


# Second Milestone
My second milestone involved getting the web server set up on my computer. I created a Web App that would have a browse button that selects an image. When I submit and press get result, a file is saved in my directory, and I get a result appear on the frontend from the server that is talking to my model on the backend. My design is mostly my finalized.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cn1QfGRkooc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# First Milestone
  

My first milestone involved setting up my raspberry pi and being able to detect the car and its model with accuracy. I used the supervised training model Nanonets to formulate my car model, and I was able to create a python script that would upload images of the different car types I wanted to predict - Acura, Audi, Dodge, Ford, and Hyundai - and their corresponding annotations that I was able to get from a car dataset. This made it much easier to train the model as I did not have to draw bounding boxes manually. The code already did it for me. When my model was first created, it was at 88% accuracy, but after testing more and more car images, the accuracy kept increasing. Now, it is at 99.5%. I also created another python script, "prediction.py", that would be able to test images using the model solely through code and not the UI on Nanonets itself.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QsjuReQxHeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
