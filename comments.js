// Create web server
// create a route for /comments
// create a route for /comments/new
// create a route for /comments/:id
// create a route for /comments/:id/edit
// create a route for /comments/:id/delete

var express = require('express');
var router = express.Router();

// Get all comments
router.get('/', function(req, res) {
  res.send('Get all comments');
});

// Create a new comment
router.get('/new', function(req, res) {
  res.send('Create a new comment');
});

// Get a comment by id
router.get('/:id', function(req, res) {
  res.send('Get a comment by id');
});

// Edit a comment by id
router.get('/:id/edit', function(req, res) {
  res.send('Edit a comment by id');
});

// Delete a comment by id
router.get('/:id/delete', function(req, res) {
  res.send('Delete a comment by id');
});

module.exports = router;