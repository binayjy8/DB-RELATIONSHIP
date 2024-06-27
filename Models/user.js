const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(() => console.log("connection successfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema ({
    username : String,
    addresses : [
        {
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User({
        username: "homelock",
        addresses: [{
            location: "street bazar 112B",
            city: "kalkata",
        }]
    });

    user1.addresses.push({location: "wallmart street", city: "London"});
    let result = await user1.save();
    console.log(result);
}

addUsers();