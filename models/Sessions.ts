import {Field, TigrisCollection, TigrisDataTypes} from "@tigrisdata/core";

@TigrisCollection("sessions")
export class Sessions {
    @Field(TigrisDataTypes.STRING)
    sessionId?: string;

    @Field(TigrisDataTypes.STRING)
    userId?: string;

    @Field(TigrisDataTypes.STRING)
    expiryDate?: string;
}