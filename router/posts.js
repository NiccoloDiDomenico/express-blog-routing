const express = require(`express`);
const router = express.Router();
const postsList = require(`../data/posts.js`);

// index 
// Read: Visualizzare tutti gli elementi 
router.get(`/`, (req,res) => {
    res.json({
        data: postsList,
        count: postsList.length
    });
});

// show
// Read: Visualizzare un elemento 
router.get(`/:id`, (req, res) => {
    const postId = req.params.id
    res.json({
        post: postsList[0]
    });
});

// store
// Create: Creare un nuovo elemento 
router.post(`/`, (req, res) => {
    res.send(`Qui creiamo un nuovo post`);
});

// updute
// Update: Modificare interamente un elemento 
router.put(`/:id`, (req, res) => {
    const postId = req.params.id
    res.send(`Qui modifichiamo interamente il post ${postId}`);
});

// modify
// Update: modificare parzialmente un elemento 
router.patch(`/:id`, (req, res) => {
    const postId = req.params.id
    res.send(`Qui modifichiamo parzialmente il post ${postId}`);
});

// destroy
// Delete: Eliminare un elemento
router.delete(`/:id`, (req, res) => {
    const postId = req.params.id
    res.send(`Qui eliminiamo il post ${postId}`);
});

// Export
module.exports = router
