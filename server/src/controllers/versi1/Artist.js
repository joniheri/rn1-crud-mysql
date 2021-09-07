// import joi
const joi = require("joi");

// import models
const { Artist, Music } = require("../../../models");

// Function GetArtists
exports.getArtists = async (req, res) => {
  try {
    const getDatas = await Artist.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (getDatas == null) {
      return res.send({
        response: "Response Failed",
        status: "Data is empty!",
      });
    }

    res.send({
      response: "Response Success",
      status: "Get data Success.",
      dataCount: getDatas.length,
      data: getDatas,
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Get data Error!",
      error: error,
    });
  }
};
// End Function GetArtists

// // Function GetArtistsHasManyMusic
// exports.getArtistsHasManyMusic = async (req, res) => {
//   try {
//     const getDatas = await Artist.findAll({
//       attributes: {
//         exclude: ["createdAt", "updatedAt"],
//       },
//       include: {
//         model: Music,
//         as: "music",
//         attributes: {
//           exclude: ["createdAt", "updatedAt", "artistId", "ArtistId"],
//         },
//       },
//     });

//     if (getDatas == null) {
//       return res.send({
//         response: "Response Failed",
//         status: "Data is empty!",
//       });
//     }

//     res.send({
//       response: "Response Success",
//       status: "Get data Success.",
//       dataCount: getDatas.length,
//       data: getDatas,
//     });
//   } catch (error) {
//     return res.send({
//       response: "Response Failed",
//       status: "Get data Error!",
//       error: error,
//     });
//   }
// };
// // End Function GetArtistsHasMany

// //  Function GetArtistById
// exports.getArtistById = async (req, res) => {
//   try {
//     const { idParam } = req.params;

//     const getData = await Artist.findOne({
//       where: {
//         id: idParam,
//       },
//       attributes: {
//         exclude: ["createdAt", "updatedAt"],
//       },
//     });

//     if (getData == null) {
//       return res.send({
//         response: "Response Failed",
//         status: `Data with id ${idParam} Not Found!`,
//         data: null,
//       });
//     }

//     res.send({
//       response: "Response Success",
//       status: "Get data Success.",
//       idParam: idParam,
//       data: getData,
//     });
//   } catch (error) {
//     return res.send({
//       response: "Response Failed",
//       status: "Get data Error!",
//       error: error,
//     });
//   }
// };
// // End Function GetArtistById

// // Function AddArtist
// exports.addArtist = async (req, res) => {
//   try {
//     const dataAdd = req.body; //Data will Added

//     // ChekcValidationInput
//     const schema = joi.object({
//       name: joi.string().min(1).required(),
//       old: joi.string().min(1).required(),
//       type: joi.string().min(2).required(),
//       startCareer: joi.string().min(4).required(),
//     });
//     const { error } = schema.validate(dataAdd);
//     if (error) {
//       return res.send({
//         status: "Response Failed",
//         message: error.details[0].message,
//         data: dataAdd,
//       });
//     }
//     // EndChekcValidationInput

//     // AddData
//     const dataAdded = await Artist.create(dataAdd);
//     if (!dataAdded) {
//       return res.send({
//         status: "Response Failed",
//         message: `Add data Failed!`,
//       });
//     }
//     // EndAddData

//     // GetArtistById
//     const idArtist = dataAdded.id;
//     const getData = await Artist.findOne({
//       where: {
//         id: idArtist,
//       },
//       attributes: {
//         exclude: ["createdAt", "updatedAt"],
//       },
//     });
//     if (getData == null) {
//       return res.send({
//         status: "Response Failed",
//         message: `Data with id ${idArtist} Not Found!`,
//         data: null,
//       });
//     }
//     // EndGetArtistById

//     res.send({
//       status: "Response Success",
//       message: "Add data Success.",
//       dataAdded: getData,
//     });
//   } catch (error) {
//     return res.send({
//       status: "Response Failed",
//       message: "Add Data Error!",
//       error: error,
//     });
//   }
// };
// // End Function AddArtist

// // Function UpdateArtist
// exports.updateArtist = async (req, res) => {
//   try {
//     const { idParam } = req.params;

//     // CheckDataById
//     const getDataById = await Artist.findOne({
//       where: {
//         id: idParam,
//       },
//       attributes: {
//         exclude: ["createdAt", "updatedAt"],
//       },
//     });
//     if (getDataById == null) {
//       return res.send({
//         status: "Response Failed",
//         message: `Data with id ${idParam} Not Found!`,
//         data: null,
//       });
//     }
//     // EndCheckDataById

//     // UpdateData
//     const dataUpdate = req.body; //Data will updated
//     const dataUpdated = await Artist.update(dataUpdate, {
//       where: {
//         id: idParam,
//       },
//     });
//     if (!dataUpdated) {
//       return res.send({
//         status: "Response Failed",
//         message: `Update Data Failed!`,
//         data: null,
//       });
//     }
//     // EndUpdateData

//     // getDataAfterUpdateById
//     const getDataAfterUpdateById = await Artist.findOne({
//       where: {
//         id: idParam,
//       },
//       attributes: {
//         exclude: ["createdAt", "updatedAt"],
//       },
//     });
//     // getDataAfterUpdateById

//     if (getDataAfterUpdateById == null) {
//       return res.send({
//         status: "Response Failed",
//         message: `Data with id ${idParam} Not Found!`,
//         data: null,
//       });
//     }
//     // EndgetUserAfterUpdateById

//     res.send({
//       status: "Response Success",
//       message: "Update data Success.",
//       idParam: idParam,
//       dataUpdated: getDataAfterUpdateById,
//     });
//   } catch (error) {
//     return res.send({
//       status: "Response Failed",
//       message: "Update Error!",
//       error: error,
//     });
//   }
// };
// // End Function UpdateArtist

// // Function DeleteArtist
// exports.deleteArtist = async (req, res) => {
//   try {
//     const { idParam } = req.params;

//     // CheckDataById
//     const getDataById = await Artist.findOne({
//       where: {
//         id: idParam,
//       },
//       attributes: {
//         exclude: ["createdAt", "updatedAt"],
//       },
//     });
//     if (getDataById == null) {
//       return res.send({
//         status: "Response Failed",
//         message: `Data with id ${idParam} Not Found!`,
//         data: null,
//       });
//     }
//     // EndCheckDataById

//     // DeleteData
//     const deleteData = await Artist.destroy({
//       where: {
//         id: idParam,
//       },
//     });
//     if (!deleteData) {
//       return res.send({
//         status: "Response Failed",
//         message: `Delete data Failed!`,
//         data: null,
//       });
//     }
//     // EndDelete

//     res.send({
//       status: "Response Success",
//       message: "Delete data Success.",
//     });
//   } catch (error) {
//     return res.send({
//       status: "Response Failed",
//       message: "Delete Error!",
//       error: error,
//     });
//   }
// };
// // End Function DeleteArtist

// Function Template
exports.templateFunction = async (req, res) => {
  try {
    res.send({
      status: "Response Success",
      message: "Success.",
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Error!",
      error: error,
    });
  }
};
// End Function Template
