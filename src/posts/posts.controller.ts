const { PostsDAO } = require("./posts.DAO");
const { CustomError } = require("../consts");

class PostsCotroller {
  async getPosts(req: any, res: any) {
    PostsDAO.getPosts()
      .then((data: any) => {
        res.json(data);
      })
      .catch((error: typeof CustomError) => {
        if (error.status === 500) {
          res
            .status(500)
            .send({ status: "Problem", message: "Problem with database" });
        } else if (error.status) {
          res
            .status(error.status)
            .send({ status: "Bad Request", message: error.message });
        } else {
          res
            .status(400)
            .send({ status: "Bad Request", message: error.message });
        }
      });
  }

  async postPost(req: any, res: any) {
    const { text, image } = req.body;
    PostsDAO.postPost(text, image)
      .then((data: any) => {
        res.json(data);
      })
      .catch((error: typeof CustomError) => {
        if (error.status === 500) {
          res
            .status(500)
            .send({ status: "Problem", message: "Problem with database" });
        } else if (error.status) {
          res
            .status(error.status)
            .send({ status: "Bad Request", message: error.message });
        } else {
          res
            .status(400)
            .send({ status: "Bad Request", message: error.message });
        }
      });
  }

  async updatePost(req: any, res: any) {
    const { text, image } = req.body;
    const { id } = req.params;
    PostsDAO.updatePost(text, image, id)
      .then((data: any) => {
        res.json(data);
      })
      .catch((error: typeof CustomError) => {
        if (error.status === 500) {
          res
            .status(500)
            .send({ status: "Problem", message: "Problem with database" });
        } else if (error.status) {
          res
            .status(error.status)
            .send({ status: "Bad Request", message: error.message });
        } else {
          res
            .status(400)
            .send({ status: "Bad Request", message: error.message });
        }
      });
  }
}

module.exports = new PostsCotroller();
export {};
