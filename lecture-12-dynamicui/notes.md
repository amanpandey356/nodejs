# Dynamic UI with EJS(Embedded Javascript)
-- Install : npm install --save ejs
-- <% %> : In this writing pure js logic
-- <%= %> : In this We Will be writing the variable whatever we want to display in UI
-- <%- %> : In this we will include the partials(reusable code)

## Steps involve To Implement ejs
1. Install : npm install --save ejs
2. in app.js write ```app.set('view engine', 'ejs)``` and ``` app.set('views', 'views') ```
3. replace the fileName extension from [.html] to [.ejs]
4. replace the [app.sendFile] to [app.render('fileName')]