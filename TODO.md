## Base Mode
### Home Page/Movie List
- [ ] When a movie poster is clicked, a user should be brought to the `/details` view for that movie.
    - [ ] saga + generator functions (GET to /details)
- [ ] movie poster cards 
- [ ] flexbox


### Details Page
- [ ] build Details component, set route
    - [ ] all details **including ALL genres** for the selected movie, including title, description, and the image, too! 
- [ ] Saga + generator functions (GET /:id)
    -[ ] double check req.params
- [ ]: The details page should have a `Back to List` button, which should bring the user to the Home/List Page


- [ ] update README
- [ ] branches
- [ ] 15+ commits

## Stretch Mode

- [ ] Add movie form
    - an input field (for the movie title)
    - an input field (for the movie poster image URL))
    - a textarea (for the movie description)
    - a dropdown (for the genres)
- [ ] cancel button
- [ ] save button - saves to db and brings back to Home Page 

- [] Refresh on Details Page
Allow the app to maintain on refresh our details page.
Research [React Router URL PARAMS](https://reactrouter.com/web/example/url-params)

 - [ ] Add query to get all genres (movie.router.js)
