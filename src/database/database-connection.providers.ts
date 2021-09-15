import * as mongoose from "mongoose";

export const MONGO_URI = "mongodb://us3rname:passw0rd@example.com:27017/database";

export const databaseConnectionProviders = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: async (): Promise<typeof mongoose> => {
            try {
                const connection = await mongoose.connect(MONGO_URI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    serverSelectionTimeoutMS: 3000
                });
                return connection;
            } catch (error) {
                console.log(`Failed to connect to the MongoDB due to: ${error}`);
                console.log("Performing process exit");
                process.exit(1);
            }
        }
    }
];
