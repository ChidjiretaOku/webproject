const config = require("../config/config.json").development
const Sequelize = require('sequelize')
const User = require('../models/user')
//const Vinush = require("../models/vinush")


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


}

const db = new DB()

module.exports = db