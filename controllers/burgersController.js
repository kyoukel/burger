const model=require("../models/burger");

module.exports={
    all: () => model.getburgers("burgers"),
    make: (data) => "",
}