import { Module } from "@nestjs/common";
import { databaseConnectionProviders } from "./database-connection.providers";
import { databaseModelsProviders } from "./database-models.providers";

@Module({
    imports: [],
    providers: [
        ...databaseConnectionProviders,
        ...databaseModelsProviders
    ],
    exports: [
        ...databaseConnectionProviders,
        ...databaseModelsProviders
    ]
})
export class DatabaseModule {}