

module.exports = (sequelize,Sequelize, Anime, User)=> {
    const UserAnime = sequelize.define("userAnime", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        anime_id:{
            type: Sequelize.INTEGER,
            references: {
                model : Anime,
                Key: "id"
            }
        },
        user_id:{
            type:Sequelize.INTEGER,
            references: {
                model : User,
                Key: "id"
            }
        },
        created_at : {
            type: Sequelize.INTEGER,
        },
        updated_at : {
            type: Sequelize.INTEGER,
        }
    })
    Anime.belongsToMany(User, {through: UserAnime})
    User.belongsToMany(Anime, {through: UserAnime})
    Anime.hasMany(UserAnime)
    UserAnime.belongsTo(Anime)
    User.hasMany(UserAnime)
    UserAnime.belongsTo(User)

    return UserAnime

}