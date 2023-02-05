const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId
    },
    updatedBy: {
        type: Schema.Types.ObjectId
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

const Anime = mongoose.model("Anime", AnimeSchema);

const createAnime = async newAnime => {
    return await newAnime.save();
}

const getById = async (id) => {
    return await Anime.findById(id).lean();
};

const getAllBook = async () => {
    return await Anime.find().lean();
};

const updateAnimeById = async (query, newValue) => {
    return await Anime.updateOne(query, newValue);
}

const deleteAnime = async (payload) => {
    return await Anime.deleteOne(payload);
}

module.exports = { getById, createAnime, Anime, getAllBook, updateAnimeById, deleteAnime };