const config = require("../config/config.json").development
const Sequelize = require('sequelize')
const User = require('../models/user')
//const Vinush = require("../models/vinush")
//const LikesConnection = require("../models/likesconnection")

/*class DB{
    constructor(){
        this.sequelize = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect,
            logging: false
        })
        this.user = User(this.sequelize, Sequelize)
        this.vinush = Vinush(this.sequelize, Sequelize)
        this.likesConnection = LikesConnection(this.sequelize, Sequelize)
    }*/
class DB{
    constructor(){
        this.sequelize = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect,
            logging: false
        })
        this.user = User(this.sequelize, Sequelize)
    }

    async isConnected(){
        try{
            await this.sequelize.authenticate()
            console.log("db is up")
            return 1
        }
        catch(e){
            console.log("db is down", e)
            return 0
        }
    }


    /*          User                */

    async findUserByUsername(username){
        return await this.user.findOne({where: {username: username}})
    }

    async getUserId(username){
        return (await this.user.findOne({where: {username: username}})).id
    }

    async getAllUsers(){
        return await this.user.findAll()
    }

    async createUser(username, hashedPassword){
        try{
            let user = await this.user.create({
                username: username,
                password: hashedPassword,
                role: "user"
            })
            console.log("Registered:\n", user)
            return {user: user, message: "Success register!", error: null}
        }
        catch(e){
            return {error: e}
        }
    }

    async updateUser(username, newUsername){
        try{
            let user = this.user.findOne({where: {username: username}})
            user.username = newUsername
            user.save()
            console.log(user)
            return {user: user}
        }
        catch(e){
            return {error: e}
        }
    }

    async deleteUser(username){
        try{
            let user = await this.user.findOne({where: {username: username}})
            let tmp = user
            await user.destroy()
            return tmp
        }
        catch(e){
            return {error: e}
        }
    }

    validateUser(username, password){
        if(username.length < 3 || username.length > 21)
            return "Username must be at least 3 char and not above 20"
        if(password.length < 3 || password.length > 31)
            return "Password must be at least 3 char and not above 30"
        return null
    }


/*
    /!*          Vine           *!/

    async findVinushById(vinush_id){
        return await this.vinush.findOne({where: {id: vinush_id}})
    }

    async getUsersVinushes(username){
        return await this.vinush.findAll({where: {username: username}})
    }

    async createVinush(username, description, author, image){
        try{
            let vinush = await this.vinush.create({
                username: username,
                description: description,
                author: author,
                image: image,
                reviewCount: 1
            })
            console.log("New Vinush:\n", vinush)
          //  await this.#createLikeConnection(await this.getUserId(username), vinush.id)
            return vinush
        }
        catch(e){
            return {error: e}
        }
    }
*/


    /*      Likes Connection        */

   /* async #createLikeConnection(user_id, qwitt_id){
        try{
            let likesConnection = await this.likesConnection.create({
                user_id: user_id,
                qwitt_id: qwitt_id
            })
            console.log("Connected:\n", likesConnection)
            return {message: "Connected!"}
        }
        catch(e){
            console.log(e)
            return {error: e}
        }
    }

    async #removeLikeConnection(user_id, qwitt_id){
        try{
            let likesConnection = await this.likesConnection.findOne({where: {user_id: user_id, qwitt_id: qwitt_id}})
            let tmp = likesConnection
            await likesConnection.destroy()
            console.log("Removed connection:\n" + tmp)
            return tmp
        }
        catch(e){
            return {error: e}
        }
    }

    async getLikedQwitts(username){
        let qwitts_id = await this.likesConnection.findAll({where: {user_id: await this.getUserId(username)}})
        let qwitts = []
        for(let i = 0; i < qwitts_id.length; i++){
            let q = await this.findQwittById(qwitts_id[i].qwitt_id)
            let json = {
                username: q.username, quote: q.quote, author: q.author,
                image: q.image, likesCount: q.likesCount, id: q.id
            }
            qwitts.push(json)
        }
        return qwitts
    }*/

}

const db = new DB()

module.exports = db