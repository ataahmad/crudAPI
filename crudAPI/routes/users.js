import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); //random tag

import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.js';

const router = express.Router();

let users = [];

//All routes in here start within this file. There is no need to  declar ./users, because we already exist in this file.
router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
