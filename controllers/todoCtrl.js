// Manipulate data handles, rountes etc.,
let data = [ {item : 'First List'}, {item : 'Second List'}, {item : 'third List'}  ];

module.exports = (app) => {

    // GET. this is for the url itself
    // 
    app.get('/todo', (req, res) => {
        res.render('todo', {todos : data});
    });

    // When user posts a data  
    // When a user adds an item to the list. 
    app.post('/todo', (req, res) => {
        
    });

        // When user deletes a data / item 
    app.delete('/todo', (req, res) => {
        
    });
}