// Manipulate data handles, rountes etc.,

module.exports = (app) => {

    // GET. this is for the url itself
    // 
    app.get('/todo', (req, res) => {
        res.render('todo');
    });

    // When user posts a data  
    // When a user adds an item to the list. 
    app.post('/todo', (req, res) => {
        
    });

        // When user deletes a data / item 
    app.delete('/todo', (req, res) => {
        
    });
}