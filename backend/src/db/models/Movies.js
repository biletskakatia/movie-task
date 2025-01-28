import { Schema, model } from "mongoose";

const movieSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        actors: {
            type: String,
            require: true
        },
        director: {
            type: String,
            require: true
        },
        genre: {
            type: String,
            enum: ['Action', 'Comedy', 'Drama', 'Horror', 'Romance'],
            required: true
        },
        rating: {
            type: Number,
            min: 0,
            max: 10,
            default: 0,
        },
        releaseDate: {
            type: Date,
            required: true
        },
        image: {
            type: String
        },
        favorite: {
            type: Boolean,
            default: false
        },
    },
    
    {
        timestamps: true,
        versionKey: false,
    },

    );
export const Movies = model('movies', movieSchema);