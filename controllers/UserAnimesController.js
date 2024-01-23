const { db} = require("../db");
const UserAnimes = db.UserAnimes
const Anime = db.Animes
exports.getAll = async (req, res)=> {
    let userAnimes
    try {
        userAnimes = await UserAnimes.findAll({ attributes: ["id", "anime_Id", "user_Id"] });
        console.log(userAnimes)
        res.send(userAnimes); // Send the response as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send(userAnimes)
}