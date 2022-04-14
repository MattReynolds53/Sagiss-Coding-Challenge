const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
    {
        // I am commenting out userId because it was returning an id that was one character different than the auto-assigned _id that MongoDB assigns it. Only the mongoDB assigned _id was working in the UL paramters when searching for a single user.
        // userId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        // },
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

module.exports = User 