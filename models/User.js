const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        name: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: Date,
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

const User = model("User", userSchema);

modeule.exports = User 