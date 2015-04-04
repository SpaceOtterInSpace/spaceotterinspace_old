---
layout: post
title:  "Github Pages"
date:   2015-03-16 09:39:03
categories: projects
---
What if I told you, you could have a website up and running within the hour that was free. Github allows you to create one website using it's website. It is referred to as github pages. 

I put together some directions but there are more thorough directions at [github pages][github pages]. 

What I want you to do is create a one page html file with some very basic content.

* Log into github 
    * create a repository with your github username \<username\>.github.io
       * For example: my github username is spaceotterinspace and my repository name is spaceotterinspace.github.io
* Log into cloud 9 with your github username
   * Choose the repository with the name you just created and clone to edit.
   * Select html5
* OPTIONAL: Add .c9 directory to your .gitignore
   * This is fairly advanced and not a requirement to get the site to work, it just cleans up your git repository a bit.
* create a file called index.html
* put some html in here
* put it back on github
    * type in the tab called bash (the command line) 
    * you can use these steps every time you want to push changes to github

<b><b />

    git add -A
    git commit -m "Initial commit"
    git push

* In about 30 minutes you will have a website at \<username\>.github.io
    * example: type spaceotterinspace.github.io in the url bar
* profit!!

[github pages]:   https://pages.github.com/
