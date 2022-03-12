import Post from "../model/Post.js";

export const createPost = (req, res) => {
    const postInfo = req.body;
    const post = new Post(postInfo);

    post
        .save()
        .then((user) => {
            res.status(201).json({ message: "Your post  created" });
        })
        .catch((err) => {
            res.status(400).json({ message: "There is problem with database" });
        });
};

export const getAllPost = (req, res) => {
    Post.find({})
        .sort('createdAt')
        .exec()
        .then((posts) => {
            res.status(200).json({ posts: posts });
        })
        .catch((err) => {
            res.status(400).json({ message: "There is problem with database" });
        });
};

export const updatePost = (req, res) => {
    const postID = req.query.postid; // new !
    const isLiked = req.body.isLiked;
    // { commentCreator : name , comment : input}
    const comment = req.body.comment;
    Post.findById(postID.toString())
        .exec()
        .then((post) => {
            const currnetLikes = post.postInfo.likes;
            if (comment) {
                post.postInfo.comments.push(comment);
            }
            if (isLiked === true) {
                post.postInfo.likes = currnetLikes + 1;
            } else if (isLiked === false) {
                post.postInfo.likes = currnetLikes - 1;
            }
            post.save();
        })
        .catch((err) => {
            console.log(err);
        });
};