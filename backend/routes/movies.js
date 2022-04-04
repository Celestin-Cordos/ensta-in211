const express = require("express");
const { getRepository } = require("typeorm");
const Movie = require("../entities/movie");
const router = express.Router();

router.get("/", function (req, res) {
  console.log("I asked for movies");
  res
    .status(200)
    .json({ message: "the endpoint works, no data to show yet", data: [] });
});

router.post("/new", function (req, res) {
  console.log("create movie");
  const movieRepository = getRepository(Movie);
  const newMovie = movieRepository.create({
    title: req.body.title,
    release_date: req.body.release_date,
  });
  movieRepository.insert(newMovie).then(function (newDocument) {
    res
      .status(201)
      .json(newDocument)
      .catch(function (error) {
        console.error(error);
        if (error.code === "23505") {
          res.status(400).json({
            message: `User with email "${newMovie.title}" already exists`,
          });
        } else {
          res.status(500).json({ message: "Error while creating the movie" });
        }
      });
  });
});

module.exports = router;
