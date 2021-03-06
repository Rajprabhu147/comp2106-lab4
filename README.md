# comp2106-lab4
Passport Authentication
Lab 4 - Passport Authentication

In this lab you will add a new data-driven page to your in-class MEAN application and control access to your new page.  Make sure your application is running using mLab for your database.

- In routes/users.js, link to your existing Account model
- In routes/users.js, modify the route handler for GET requests at /users so that it queries your database using your Account model and fetches a list of all users.  Also make this route private so only authenticated users can access it
- Create views/users.ejs, include your header and footer and display the user _ids and usernames in an HTML grid (the hashed passwords and salt values should NOT be displayed)
- In views/partials/header.ejs, add a link to the new Users page that only shows when someone is logged in to the site

To submit, commit to GitHub and publish to Azure, Heroku, or another cloud service.  Post the links to both your GitHub repo and your live site.
