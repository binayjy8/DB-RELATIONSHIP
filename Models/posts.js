const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(() => console.log("connection successfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema ({
   username: String,
   email: String
});

const postSchema = new Schema ({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    let user1 = new User ({
        username: "Rahul kumar",
        email: "rahul@gmail.com"
    });

    let post1 = new Post ({
        content: "Hello World",
        likes: 10
    });
};