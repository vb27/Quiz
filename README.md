# Quiz

## Description
This is a simple multiple choice quiz. It is a time based quiz where wrong answers will reduce the time. When the time hits 0 or when you finish all the questions the quiz will end. When the quiz ends, you will be asked to type your name which will be displayed on the highscore page. You will be redirected to the highscore page at the end, but if you ever want to check the list you can click the tab on the top left. As all the scores are saved to the local storage you can see them when you revisit the page. Also you can clear the history by a click of a button.

## Installation
This project can live in as little as 2 files if wanted (mine is currently 3). The style.css is not needed but used to have a style class that I can reference instead of type out each time. 

The rest of the project is all in the html and javascipt. To personalize all that is need is to change the values of the questions array. You can change the question and choices to whatever you want by the change of the string. The correct answer also changes by any of the strings 1-4 for the choices. To add more questions you will just need to copy more question objects into the questions array.

## Usage
If you need a single page multiple choice quiz that can remember past scores. As this quiz can be completly changed by change a few strings.