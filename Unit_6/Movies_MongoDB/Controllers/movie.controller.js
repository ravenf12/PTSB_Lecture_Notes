const router = require("express").Router();
const Movie = require("../models/movie.model");

// Error Response Function
const errorResponse = (res, error) => {
    return(
        res.status(500).json({
            Error: error.message
        })
    );
}

//TODO POST
// http://localhost:4000/movies/
router.post('/', async (req,res) => {
    try {
        //1. Pull data from client (body)
        const {title, genre, rating, length, releaseYear} = req.body;
        /* 
            {
                "title": "A Dogs Purpose",
                "genre": "Drama",
                "rating": "10/10",
                "length": "2",
                "releaseYear": "2016"
            }
        */
        //2. Create a new object using the Model
        const movie = new Movie({
            title, genre, rating, length, releaseYear
        });
        //3. Use mongoose method to save to MongoDB
        const newMovie = await movie.save();
        //4. client response
        res.status(200).json({
            newMovie,
            message: "Success! Movie added to MovieDB",
        });
    } catch (err) {
        errorResponse(res, err);
    }
});

// http://localhost:4000/movies/
//TODO GET One
/* 
   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        
        Hint: Consider login within user.controller.js

*/

router.get("/:id", async (req, res) => {
    try {
        let {id} = req.params; 

        console.log(req.params);

        const movie = await Movie.findOne({_id: id});

        movie ?
        res.status(200).json({
            msg: `${movie.title} was found!`,
        })
        : res.status(404).json({
            message: "No movie found."
        });
        } catch (err) {
      errorResponse(res, err);
    }
  });

//TODO Get All
/* 
   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        
        
        Hint: parameters within method are optional
*/

router.get("/", async (req, res) => {
    try {
    // This endpoint will only return all movies, no req or params needed
    // Await all documents from the Movie collection
    const getAllMovies = await Movie.find();

    getAllMovies
      ? res.status(200).json({
          message: "All movies from movie collection:",
          getAllMovies,
        })
      : res.status(404).json({
          message: `No movies found.`,
        });
  
        } catch (err) {
      errorResponse(res, err);
    }
  });

//TODO Get All by Genre
/* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider parameter casing within the endpoint.
            - hint: conditional w/ looping
*/

router.get("/genre/:genre", async (req, res) => {
    try {
    // Grab genre value from parameters
    const { genre } = req.params;
    // if (genre) {
    //   for (let i = 0; i < genre.length; i++) {
    //     i === 0
    //       ? (buildWord = genre[i].toUpperCase())
    //       : (buildWord += genre[i].toLowerCase());
    //   }
    // }

    // Finding all movies in DB whose genre matches the params ({db genre key : req.params.genre })
    // { genre: buildWord }
    const getMovies = await Movie.find({ genre: genre });

    getMovies.length > 0
      ? res.status(200).json({
          getMovies,
        })
      : res.status(404).json({
          message: `No movies found.`,
        });
        } catch (err) {
      errorResponse(res, err);
    }
  });

//TODO PATCH One
router.patch('/:id', async (req, res) => {
    try {
        //1. Pull value from parameter
        const { id } = req.params;
        const info = req.body;

        //2. Pull data from the body.
        const returnOption = {new: true};
        //3. Use method to locate document based off ID and pass in new information.
        const update = await Movie.findOneAndUpdate({_id: id}, info, returnOption);

        //4. Respond to client.
        res.status(200).json({
            message: `Update Complete.`, update,
          });

    } catch (err) {
        errorResponse(res, err);
    }
});

//TODO Delete One
router.delete('/:id', async (req,res) => {
    try {
        //1. Capture ID
        const { id } = req.params;
        
        //2. use delete method to locate and remove based off ID
        const removeMovie = await Movie.deleteOne({_id: id});

        //3. Respond to Client
        removeMovie.deleteCount ?
        res.status(200).json({
        message: "It's all gone."
        })
        : res.status(404).json({
        message: "No movie here."
        });
} catch (err) {
    errorResponse(res, err);
}
});
module.exports = router;