const fs = require("fs");

class ReviewBuilder {
  constructor() {
    this.reviews = JSON.parse(fs.readFileSync("./data/reviews.json", "utf8"));
  }

  buildReviewsSync() {
    let products = JSON.parse(fs.readFileSync("./data/products.json", "utf8"));
    let users = JSON.parse(fs.readFileSync("./data/users.json", "utf8"));

    let result = this.reviews.map((x) => {
      x.productName = products[x.productId - 1].name;
      x.username = users[x.userId - 1].username;
      delete x.productId;
      delete x.userId;
      return x;
    });

    console.log(result);
    return result;
  }
}

module.exports = ReviewBuilder;
