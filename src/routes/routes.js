const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const recipeController = require('../controllers/recipeController');
const adminController = require('../controllers/adminController');
// Adicione middlewares de autenticação/autorização conforme necessário

// Rotas de usuário
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Rotas de receitas
router.post('/recipes', /*authMiddleware,*/ recipeController.createRecipe);
router.get('/recipes', recipeController.getAllApprovedRecipes);

// Rotas de admin (exemplo: proteger com middleware de admin)
router.get('/admin/pending-recipes', /*adminMiddleware,*/ adminController.getPendingRecipes);
router.patch('/admin/approve-recipe/:id', /*adminMiddleware,*/ adminController.approveRecipe);
router.get('/admin/users', /*adminMiddleware,*/ adminController.getAllUsers);

module.exports = router;