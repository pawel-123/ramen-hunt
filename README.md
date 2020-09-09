# Ramen Hunt

Ramen Hunt is an application that allows logging and rating your ramen bowls.

- Register an account, login and logout
- Log and rate your ramen bowl
- See the list of logged ramen bowls (sorted by added date)

## Technology

Ramen Hunt was the first app I built using Django and React. 

Django backend serves data to React frontend using Django REST Framework (DRF).

In order to be able to rely on Django built-in session-based authentication (instead of using JWT for authentication), I followed the pattern recommended in [this blog post](https://www.valentinog.com/blog/drf/):

> *"Option 1. React in its own "frontend" Django app: load a single HTML template and let React manage the frontend (difficulty: medium)"*

I've also configured webpack based on the recommendations from the same blog post, rather than use CRA, in order to serve a static main.js file (as CRA generates a new .js filename on each build).

## Learnings
- Setting up custom webpack configuration (instead of CRA)
- Loading React app in a Django template
- Exposing data from Django app via DRF using serializers and API views
- Displaying, filtering and sorting data from the DRF in the React app
- Filtering the bowl feed based on user ID exposed in index.html via window
- Submitting a POST request from React app to Django/DRF
- Passing a CSRF token when submitting a POST request from React to Django/DRF
- Updating the bowl feed in React app after submitting a POST request to Django/DRF
- Reset form values to empty/defaults after POST request submission

## To Do's

- [ ] Write tests
- [ ] Fix displaying author's name in the feed
- [ ] Find a better UI/UX for Register/Login/Logout (currently displayed on top of the page)
- [ ] Improve date formatting
