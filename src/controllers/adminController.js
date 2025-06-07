const Recipe = require('../models/recipeModel');
const User = require('../models/userModel');

// Listar todas as receitas pendentes
exports.getPendingRecipes = async (req, res) => {
    try{

    }catch (error) {
        console.error('Error fetching pending recipes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Aprovar uma receita

exports.approveRecipe = async (req, res) => {
    try{

    }catch (error) {
        console.error('Error approving recipe:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Listar todos os usuários

exports.getAllUsers = async (req, res) => {
    try{

    }catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}