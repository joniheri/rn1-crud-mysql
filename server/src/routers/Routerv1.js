const express = require("express");

const router = express.Router();

// ArtistRoute
const {
  getArtists,
  getArtistsHasManyMusic,
  getArtistById,
  addArtist,
  updateArtist,
  deleteArtist,
} = require("../controllers/versi1/Artist");

router.get("/artists", getArtists);
router.get("/artists-music", getArtistsHasManyMusic);
router.get("/artist/:idParam", getArtistById);
router.post("/add-artist", addArtist);
router.patch("/update-artist/:idParam", updateArtist);
router.delete("/delete-artist/:idParam", deleteArtist);
// EndArtistRoute
