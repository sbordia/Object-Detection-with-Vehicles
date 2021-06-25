# Object Detection Model For Cars
I worked on an object detection model using machine learning to accurately predict the type of car, specifically the model of it, when its image is captured. In addition, any time a car comes too close to you on the road, I created a design so that an alert will pop up on your phone as a notificationto be aware of your surroundings, especially at that particular time.

| **Engineer** | **School** | **Area of Interest** | **Grade** |
|:--:|:--:|:--:|:--:|
| Sanay Bordia | Archbishop Mitty | Computer Science/Machine Learning | Incoming Junior


![Object Detection with Cars](http://www.nanrussell.com/wp-content/uploads/2016/08/Progress.jpg)

  
# Final Milestone
My final milestone is the increased reliability and accuracy of my robot. I ameliorated the sagging and fixed the reliability of the finger. As discussed in my second milestone, the arm sags because of weight. I put in a block of wood at the base to hold up the upper arm; this has reverberating positive effects throughout the arm. I also realized that the forearm was getting disconnected from the elbow servo’s horn because of the weight stress on the joint. Now, I make sure to constantly tighten the screws at that joint. 

[![Final Milestone](https://res.cloudinary.com/marcomontalbano/image/upload/v1612573869/video_to_markdown/images/youtube--F7M7imOVGug-c05b58ac6eb4c4700831b2b3070cd403.jpg )](https://www.youtube.com/watch?v=F7M7imOVGug&feature=emb_logo "Final Milestone"){:target="_blank" rel="noopener"}

# Second Milestone
My second milestone involves getting MIT App Inventor onto the Android Phone and getting the model to work on the app itself. To do this, I set up a web server that will be able to connect the backend to the raspberry pi. When I press a "Predict" button on my app, the app should be able to call the backend through the raspberry pi, displaying the results (predicted model type).

[![Second Milestone](https://res.cloudinary.com/marcomontalbano/image/upload/v1612574014/video_to_markdown/images/youtube--y3VAmNlER5Y-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=y3VAmNlER5Y&feature=emb_logo "Second Milestone"){:target="_blank" rel="noopener"}
# First Milestone
  

My first milestone involved setting up my raspberry pi and being able to detect the car and its model with accuracy. I used the supervised training model Nanonets to formulate my car model, and I was able to create a python script that would upload images of the different car types I wanted to predict - Acura, Audi, Dodge, Ford, and Hyundai - and their corresponding annotations that I was able to get from a car dataset. This made it much easier to train the model as I did not have to draw bounding boxes manually. The code already did it for me. When my model was first created, it was at 88% accuracy, but after testing more and more car images, the accuracy kept increasing. Now, it is at 99.5%. I also created another python script, "prediction.py", that would be able to test images using the model solely through code and not the UI on Nanonets itself.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QsjuReQxHeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
