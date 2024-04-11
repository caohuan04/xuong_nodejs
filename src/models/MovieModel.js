import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MovidesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
    },
    director: {
        type: String,
    },
    cast: {
        type: String,
    },
    genres: {
        type: [Schema.Types.ObjectId],
        ref: 'Genre',
        require: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
    },
    runingTime: {
        type: Number,
    },
    language: {
        type: String,
    },
    rated: {
        type: Number,
    },
    trailer: {
        type: String,
    },
    imgBanner: {
        type: String,
    }
},
    {
        timestamps: true,
        versionKey: false,

    });

const Movie = mongoose.model("Movie", MovidesSchema);
export default Movie;
