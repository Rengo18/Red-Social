const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUser, UpdateUser, DeleteUser } = require('../controllers/users.controllers');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    .put(UpdateUser)
    .delete(DeleteUser);

module.exports = router;
