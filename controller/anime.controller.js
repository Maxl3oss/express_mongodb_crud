const { Anime, createAnime, getById, getAllBook, updateAnimeById, deleteAnime } = require("../model/anime.model");

const validateReq = body => {
    if (!body.title) throw new Error("Please filled title");
    if (!body.description) throw new Error("Please filled description");
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await getAllBook();
        return res.json({ data: books });
    } catch (error) {
        console.log(`[ERROR] -> ${error}`);
        return res.json({ success: false, error });
    }
};
exports.getBookById = async (req, res) => {
    try {
        return res.json({ data: await getById(req.params.id) });
    } catch (error) {
        console.log(`[ERROR] -> ${error}`);
        return res.json({ success: false, error });
    }
};
exports.createAnime = async (req, res) => {
    try {
        validateReq(req.body);
        const { title, description } = req.body;
        const newAnime = new Anime({
            title,
            description,
            createdBy: "63dd0c0c05117aa57838797a"
        });
        const data = await createAnime(newAnime);
        return res.json({ success: true, data });
    } catch (error) {
        console.log(`[ERROR] -> ${error}`);
        return res.json({ success: false, error });
    }
};
exports.updateAnime = async (req, res) => {
    try {
        validateReq(req.body);
        const query = await getById(req.params.id)
        const { title, description } = req.body;
        const newValue = {
            $set: {
                title: title,
                description: description,
            },
            updatedBy: "63dd0c0c05117aa57838797a"
        }
        const data = await updateAnimeById(query, newValue);
        return res.json({ success: true, data });
    } catch (error) {
        console.log(`[ERROR] -> ${error}`);
        return res.status(404).json({ success: false, error })
    }
}
exports.deleteAnime = async (req, res) => {
    try {
        const payload = { title: req.body.title }
        const data = await deleteAnime(payload);
        return res.json({ success: true, data });
    } catch (error) {
        console.log(`[ERROR] -> ${error}`);
        return res.status(404).json({ success: false, error })
    }
}