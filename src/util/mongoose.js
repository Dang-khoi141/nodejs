module.exports = {
    // render va map cac phan tu ben trong dung cho 1 document
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    // dung cho chi tiet
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() :mongoose;
    }
};