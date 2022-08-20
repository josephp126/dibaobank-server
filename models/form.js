const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
 	 id: Schema.Types.ObjectId,
    sub_date: Date,
    date: Date,
    lane_number: String,
    distributor: String,
    dis_notes: String,
    table: String,
    table_notes: String,
    sweep: String,
    sweep_notes: String,
    pin: String,
    pin_notes_needed: String,
    ball_return: String,
    ball_return_notes: String,
});

// Compile model from schema
const Form = mongoose.model("form", formSchema);
module.exports = Form;
