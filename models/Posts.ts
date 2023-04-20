const Field = require('@tigrisdata/core').Field;
const PrimaryKey = require('@tigrisdata/core').PrimaryKey;
const TigrisCollection = require('@tigrisdata/core').TigrisCollection;
const TigrisDataTypes = require('@tigrisdata/core').TigrisDataTypes;

@TigrisCollection("posts")
export class Posts {
    @PrimaryKey(TigrisDataTypes.INT64, {order: 1, autoGenerate: true})
    id?: number;

    @Field(TigrisDataTypes.STRING)
    title?: string;

    @Field(TigrisDataTypes.STRING)
    postContent?: string;

    @Field(TigrisDataTypes.STRING)
    thumbnail?: string;
}