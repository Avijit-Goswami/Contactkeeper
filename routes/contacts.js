const express = require('express')
const router = express.Router()

//@route        GET  /api/contacts
//@description  Get all user contact
//@access       Private
router.get('/', (req, res) => {
    res.send('Get all user contact')
})

//@route        POST  /api/contacts
//@description  Add a new contact
//@access       Private
router.post('/', (req, res) => {
    res.send('Add a new contact')
})

//@route        PUT  /api/contacts/:id
//@description  Update contact
//@access       Private
router.put('/:id', (req, res) => {
    res.send('Update contact')
})

//@route        DELETE  /api/contacts/:id
//@description  Delete contact
//@access       Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact')
})

module.exports = router