const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let appDataSchema = new Schema(
    {
        stockName: { type: String },
        stockPrise: { type: Number },
        stockNSE: { type: Number },
    },
    { timestamps: true, versionKey: false }
);

let AppData = mongoose.model("AppData", appDataSchema);

module.exports = AppData;

