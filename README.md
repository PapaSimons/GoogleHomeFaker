# Google Home Faker

This is a simple webapp + nodejs module that you can use to fake Google home voice commands in a realistic way.
With this project, you will be able to trigger any voice command through the Google Home and it will speak it out with the LEDs blinking.
It is meant for user testing on voice assistants, but you can use it for other purposes.

# Install and run

1) Download the repository into your folder and cd into it

2) First time run node init in order to get all the node modules
```sh
node install
```

3) Start the node app
```sh
node index.js
```
4) In your browser go to http://localhost:8888

5) Connect to Google home via bluetooth

* You can change and modify the scripts within the HTML app to meet your needs

# How it works

You will need to connect your laptop to google home with bluetooth (just google how to).
The web app (which you can find in the public folder), triggers HTML5 speech APIs for the different text strings.
The Nodejs app has a simple API which turns the volume up and down a little in a set frequency which makes Google home LEDs blink.

![Web app where you can trigger the voice commands](/images/web_app.png)

# Web app features

* Change different vars in the texts at the top
* Change different languages
* Quick Random Fallbacks - 'I didn't understand..' 
* Free Text Input
* Pre-Set texts

Read more about our UX research here: https://medium.com/firemarksg

@ Done at Firemark Singapore Innovation Lab @ IAG
