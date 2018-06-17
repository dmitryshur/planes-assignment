# How to launch

`npm install`

`npm start server`

Open the browser on port 9000

# Things to improve

- [ ] Optimize the table rendering. re-render only the rows which were changed. this could be done
  by saving the previous fetched data. references to the rendered DOM elements could be saved,
  and then, if the new fetched data is ordered differently, re-render the DOM element with the same
  index as of the new fetched data array. (or use a framework such as React/Vue)
- [ ] Write tests to every possible thing.
- [ ] Add custom error handling.
- [ ] Add responsive design,
- [ ] Change the design ( obviously, i'm not a designer).
