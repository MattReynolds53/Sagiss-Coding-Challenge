const { Schema, Types, model } = require('mongoose');

// The following is the schema that outlines the fields the User can/must fill in. The user can enter a personal ID number they would like (despite MongoDB automatically assigning a lengthier _id), their full name, their address, and a personal description of themselves. The createdAt value will be automatially assigned when the individual enters his or her information.
const userSchema = new Schema(
    {
        // I am commenting out userId because it was returning an id that was one character different than the auto-assigned _id that MongoDB assigns it. Only the mongoDB assigned _id was working in the UL paramters when searching for a single user.
        personalId: {
            type: Number,
        },
        fullName: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model("user", userSchema);

// Exporting this file so other files may access this file's information
module.exports = User 