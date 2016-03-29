# quiz2

# instructions - 

You will not need to run XAMPP or any other type of web server to complete this quiz.

In the above folder, you will find three files:
* quiz2.html
* quiz2.js
* quiz2.css

## Section 1

*Bug Fixes*

Throughout those three files, there are a number of code breaking mistakes. The goal of this quiz is to analyse the code, and fix everything that you may find to be broken.

To see any js related problems, you will need to open your browser's developer tools and inspect the console section, where you will see a number of errors to be found.

The information associated with the errors will be apparent, and it will also tell you what line of the html or js file the error occurs on.

If there are any other errors, such as with the markup of the html file itself or the css file, you will have to read the code and figure out what the error is. It should be apparent.

You should not add any other files to the repo when you are making your changes. This means, no outside plugins or libraries aside from jQuery are allowed to be used. You may use jQuery, regular javascript or any combination of the two.

### 25 Points

## Section 2

*Write a function to these specifications:*

### All work for part two will be done in the files you worked with for part one

1. Using the api that we used for the bonus question, write a function that will do the following:
  * Create a button with the text "Get Title"
  * When I click the button, it will make an ajax request to this url - http://www.mattbowytz.com/simple_api.json
  * You will need to use a query string named "data" and the value should be "quizData"

2. Using the return data, complete the following:
  * For this section, only the button should display on page load (leave everything from part one the way it is, you can add this data and the button/s and anything else related to part two of this quiz either above or below the elements from step one)
  * When the button is clicked, a random string from the return data from the request should display prominently on the page and the text of the button should say "Change It". Only one string at a time should display on the page
  * You will then need to add a new button that says "Keep It" (this button should not be in the dom when the page loads)
  * If I click on the "Keep It" button, you should set a cookie using js, so that when I refresh the page I can see what the last value was, and the original button should display, allowing me to complete the operation again, and set a new cookie if I want to keep the new value and so on
  * *Note:* setting cookies with regular js is pretty easy, but cannot be done easily with jQuery on it's own

3. Apply a basic layer of styling to the page.
  * As always, I will not be looking for the next great internet masterpiece, but I do not want to see any default styles whatsoever.

### 25 Points

## TOTAL - 50 Points

# Submission/Git notes:

*Some tips for using git*

1. Fork this repo. Do not just clone it.
2. On your version of the repo, copy and paste the the link next to the word "HTTPS". (This is the url that is used to get your code from github to your computer).
3. From the command line (sorry, I don't use a gui and my knowledge of them is pretty basic) run - `git clone {https url from page}`
4. This will create a folder in that directory called quiz2, you will work on this files in that folder
5. in the command like still, run `git remote -v` - this will print out your remote repos
6. You should see something that looks like the url to your repo, and the branch name, which will be called `origin` - this is where your code lives
7. Next run `git remote add matt https://github.com/matty-digital/quiz2.git` - this will add my repo as a remote for you to push your changes to
8. Now, create a new branch to do your changes on. By default, you'll be on a branch called "master". Run `git checkout -b quiz2-{last name}` to create and go to the branch you will do your work on. You named this branch in the above command.
9. When you have made your changes, run `git commit -am "meaningful commit message"` this will stage your changes and get them ready to push (please create your own commit message, I don't want to see the example text)
10. Next run `git push origin quiz2-{last name}` - this will push your local changes on your branch to github and you can then make a pull request
11. Back in your browser, go to your github page. Now that you've pushed, you should see a link above where you found the HTTPS link for your repo and click it to make a pull request.
12. On the pull request page, write a comment in the large field with your information and click `create pull request`

After you create the pull request, I will be able to see it in comparison to the code that was on the repo that you forked.

## Note:

All errors must be corrected for full credit. And the function must behave as described in the above requirements. Also, please read cany comments you find in the files. They will contain specifics, hints, etc.
