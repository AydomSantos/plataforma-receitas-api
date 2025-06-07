const Recipe = require('../models/Recipe');

// Cria uma nova receita
exports.createRecipe = async (req, res) => {
 try{
    const recipe = new Recipe({
        author: req.user._id,
        title: req.body.title,
        tempo: req.body.tempo,
        servings: req.body.servings,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    });
    await recipe.save();
    res.status(201).json({ message: 'Recipe created successfully', recipe });
 }catch(error) {
   console.error('Error creating recipe:', error);
   res.status(500).json({ message: 'Internal server error' });
 }
}

// Listar todas as receitas aprovadas
exports.getAllApprovedRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find({ status: 'approved' });
        res.json(recipes);
    }catch(error) {
        console.error('Error fetching approved recipes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Listar receitas pendentes (para admin)
exports.getPendingRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find({ status: 'pending' });
        res.json(recipes);
    }catch(error) {
        console.error('Error fetching pending recipes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Aprovar uma receitas (admin)
exports.approveRecipe = async (req, res) => {
    try{
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id, 
            { status: 'approved' }, 
            { new: true }
        )
    }catch(error) {
        console.error('Error approving recipe:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

