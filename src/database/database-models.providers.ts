import * as mongoose from "mongoose";
import { Connection, Model } from "mongoose";

export interface IUser extends mongoose.Document {
    firstname: string;
    lastname: string;
}

type UserModel = Model<IUser>;

export const UserSchema = new mongoose.Schema<IUser>({
    firstname: {
        type: String,
        maxlength: 1024
    },
    lastname: {
        type: String,
        maxlength: 1024
    }
});

export const createUserModel: (connection: Connection) => UserModel = (connection: Connection) => 
    connection.model<IUser>("User", UserSchema, "users");

export const databaseModelsProviders = [
    {
        provide: "USER_MODEL",
        useFactory: (connection: Connection) => createUserModel(connection),
        inject: ["DATABASE_CONNECTION"]
    }
];
