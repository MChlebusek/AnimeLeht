const { db} = require("../db");
const UserAnimes = db.userAnimes
const Anime = db.Animes
exports.getAll = async (req, res)=> {
    const userAnimes = await userAnimes.findAll({
        include: {all: true},
        logging: console.log
    })
    console.log(userAnimes)
    let result = []
    result = userAnimes.map((lp)=>{
        return {
            "animeName":lp.anime.name,
            "user": `{lp.user.name}`
        }
    })
    res.send(result)
}