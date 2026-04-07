const blog = require("../models/blog")

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item
  }

  const likesArray = blogs.map(blog => blog.likes)

  return likesArray.length === 0
    ? 0
    : likesArray.reduce(reducer, 0)

}

const favoriteBlog = (blogs) => {
    let currentFavBlog = blogs[0]
    blogs.forEach(blog => {
        if(blog.likes >= currentFavBlog.likes){
            currentFavBlog = blog
        }
    });
    return currentFavBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}