const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tempo: { type: Number, required: true }, 
    servings: { type: Number, required: true }, 
    ingredients: [{ type: String, required: true }],
    instructions: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'approved'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);