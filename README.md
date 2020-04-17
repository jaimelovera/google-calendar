# Google Calendar Clone Using React

> A very basic and bare bone clone of google calendar. Displays calendar in both weekly and monthly views and populates with the correct dates for every month. Shows the current time on calendar represented by a red line.

## Visit My Hosted Demo
https://google-calendar.netlify.app/

## Quick Start 
```
# Install dependencies
npm install

# Serve on localhost:3000
npm start

# Build for production
npm run build
```

## Motivation
This was my very first React application! Very, very basic but it implements the view when you open google calendar. Not all months are equal, some months require more rows than others. I was able to account for this with conditional rendering and it works for every month. I put all my components together in one folder. In the future I will add another level of files to seperate my component files. Also, I realized that the CSS files are all global. So one css file will effect all other components with the same class name. In the future I will look at using CSS Modules to be able to scope my CSS classes to only their local components. This way my app will be more modular and I wont have problems with clashing CSS. I decided to not spend more time adding additional functionality to this calendar, because there are other ideas I want to start bringing to life! :)

## App Info

#### Author: [Jaime Lovera](https://www.jaimelovera.com/)