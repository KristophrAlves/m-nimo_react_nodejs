import mongoose from "mongoose";

const repositorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        url: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        userId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }

);

export default mongoose.model('RepositorySchema', repositorySchema);