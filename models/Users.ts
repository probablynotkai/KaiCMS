import {Field, PrimaryKey, TigrisCollection, TigrisDataTypes} from "@tigrisdata/core";

@TigrisCollection("users")
export class Users {
    @PrimaryKey(TigrisDataTypes.INT64, { order: 1, autoGenerate: true })
    id?: number;

    @Field(TigrisDataTypes.STRING)
    username?: string;

    @Field(TigrisDataTypes.STRING)
    password?: string;

    @Field(TigrisDataTypes.STRING)
    dateCreated?: string;

    @Field(TigrisDataTypes.STRING)
    role?: string;
}