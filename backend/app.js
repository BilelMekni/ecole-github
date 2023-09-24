//-------Module Importation -------//
/**import Express Module****/

const express = require("express");
/**Import Module Body Parser**/// */
const bodyParser = require("body-parser");
/**Import Module Path (module interne) ***/// */
const path = require("path");
/**Import Module Multer ***/// */
const multer = require("multer");
/**Import Module Bycript ***/// */
const bcrypt = require("bcrypt");
/**Import Module Axios ***/// */
const axios = require("axios");
/**Import Module Request ***/// */
const request = require("request");
/**Import Mongoose Module ***/// */
const mongoose = require("mongoose");
// import ObjectID
const { ObjectId } = require("mongodb");
// Connect APP to DB (projetEcoleDB)
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/projetEcoleDB');

////----------Express Application--------////
// creates express application //
const app = express();
///**---Module Importation/***/ */ */
const User = require("./models/user");
const Examen = require("./models/examen");
const Publication = require("./models/publication");
const Note = require("./models/note");
const Cour = require("./models/cour");
const envoie = require("./models/envoie");
const Contact = require("./models/contact");
const Reponder = require("./models/reponder");


// send JSON responses
app.use(bodyParser.json());
// Get Objects from Request
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// Folder confiquration
app.use('/images', express.static(path.join('backend/images')));

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'application/pdf': 'pdf',
    'video/mp4' : 'mp4',



};
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
////-----Buisness Logic --------------////
///----------------------Partie Eleves--------------------------------------------------------///
//****** signup Eleves ***////** */ */
app.post("/eleves/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images/" + req.file.filename
        : url + "/images/" + "bilel.jpg";
    console.log("URL", url);
    // http://localhost:3002
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);

        let eleve = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.telephone,
            email: req.body.email,
            password: cryptedPwd,
            adresse: req.body.adresse,
            date : req.body.date,
            section : req.body.section,
            niveau : req.body.niveau,
            role: req.body.role,
            status: req.body.status,
            gender: req.body.gender,
            avatar: path,
        });
        eleve.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });
                }

            } else {
                res.json({ message: "Added with success" });

            }
        });
    });

});
///***Get All Eleves in Students Table **//// */
app.get("/eleves", (req, res) => {
    console.log("Here into BL: Get All eleves");
    User.find({ "role": { "$in": "students" } }).then((docs) => {
        // console.log("Here data after search all students", docs);
        res.json({ eleves: docs });
    });
});
//*****delete  eleves by admin //**** */ */
app.delete("/eleves/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Eleves By Admin  By ID", id);
    User.deleteOne({ _id: id }).then((response) => {
        console.log("Here response eleves after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///***  get eleves by id //***** */   */
app.get("/eleves/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Get publications By ID", id);
    User.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ students: doc })
            : res.json({ message: "Eleves does not exist" });
    });


}

);
///****update eleves by admin ///*** */ */
app.put("/eleves", (req, res) => {
    console.log("here into BL:Edit Eleves", req.body);

    User.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});
////---------------------------Partie Admin-------------------------------------------------------------//////
//****** signup Admin ***////** */ */
app.post("/admin/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images/" + req.file.filename
        : url + "/images/" + "bilel.jpg";
    console.log("URL", url);
    // http://localhost:3002
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);

        let admin = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.telephone,
            email: req.body.email,
            password: cryptedPwd,
            adresse: req.body.adresse,
            role: req.body.role,
            gender: req.body.gender,
            avatar: path,
        });
        admin.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });
                }

            } else {
                res.json({ message: "Added with success" });

            }
        });
    });

});
///***Get All Admin in admin Table **//// */
app.get("/admin", (req, res) => {
    console.log("Here into BL: Get All admin");
    User.find({ "role": { "$in": "admin" } }).then((docs) => {
        // console.log("Here data after search all admin", docs);
        res.json({ admin: docs });
    });
});
//*****delete teachers by admin //**** */ */
app.delete("/admin/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Admin By Admin  By ID", id);
    User.deleteOne({ _id: id }).then((response) => {
        console.log("Here response admin after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///***  get admin by id //***** */   */
app.get("/admin/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Get admin By ID", id);
    User.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ admin: doc })
            : res.json({ message: "Admin does not exist" });
    });


}

);
///****update admin by admin ///*** */ */
app.put("/admin", (req, res) => {
    console.log("here into BL:Edit Admin", req.body);

    User.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Admin is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});

////--------------------------Partie Teachers--------------------------------------------------////////
//****** signup Teachers ***////** */ */
app.post("/teachers/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    let path = req.file
        ? url + "/images/" + req.file.filename
        : url + "/images/" + "bilel.jpg";
    console.log("URL", url);
    // http://localhost:3002
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
        console.log("Here crypted Pwd", cryptedPwd);

        let teacher = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            telephone: req.body.telephone,
            email: req.body.email,
            password: cryptedPwd,
            adresse: req.body.adresse,
            experience: req.body.experience,
            matricule: req.body.matricule,
            section : req.body.section,
            role: req.body.role,
            gender: req.body.gender,
            avatar: path,
        });
        teacher.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.email) {
                    res.json({ message: "Email exist" });
                }

            } else {
                res.json({ message: "Added with success" });

            }
        });
    });

});

///***Get All teachers in teachers  Table **//// */
app.get("/teachers", (req, res) => {
    console.log("Here into BL: Get All teachers");
    User.find({ "role": { "$in": "teachers" } }).then((docs) => {
        // console.log("Here data after search all admin", docs);
        res.json({ teachers: docs });
    });
});
//*****delete teachers by admin //**** */ */
app.delete("/teachers/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Teachers By Admin  By ID", id);
    User.deleteOne({ _id: id }).then((response) => {
        console.log("Here response teachers after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///****get teachers by id ///***** */ */
app.get("/teachers/:y", (req, res) => {
    let id = req.params.y;
    console.log("Here into BL : Get teachers By ID", id);
    User.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ teachers: doc })
            : res.json({ message: "Patients does not exist" });
    });
})
///****update teachers by admin ///*** */ */
app.put("/teachers", (req, res) => {
    console.log("here into BL:Edit Teachers", req.body);

    User.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});
/////--------------------------------Partie Examens------------------------------------////////
    // Business Logic:Add Examen
app.post("/examens", (req, res) => {
    console.log("Here into BL: Add examen", req.body);
    let exam = new Examen({
        titre: req.body.titre,
        nom: req.body.nom,
        date: req.body.date,
        heure: req.body.heure,
        salle: req.body.salle,
        status: req.body.status,
        teachersId : req.body.teachersId,
        
    });
    console.log("here aded pub examen", exam);
    exam.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});

///****get all examen //*** */ */
// Business Logic : Get All Examen //**** */
app.get("/examens/all/examen/exam", (req, res) => {
    console.log("here examens with comments");
    Examen.aggregate(
        [

            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "examens", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all examens", docs);
            res.status(200).json({
                examens: docs,
            });
        }
    );

})
///*** Buisness Logic : examens by id**/// */
app.get("/examens/:id", (req, res) => {
    console.log("here examens with id", req.params.id);
    Examen.aggregate(
        [
            {
                $match: { teachersId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "teachers", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  pubs by examen id", docs);
            res.status(200).json({
                exams: docs,
            });
        }
    );

})
////Business Logic : Confirme examen teachers par admin
app.post("/examens/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Examen.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
//*** Examens des eleves : consultes les examens confirmer *////
app.get("/examens/", (req, res) => {
    console.log("here examens with id", req.params.id);
    Examen.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "teachers", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  examens by teachers id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//*****delete examens eleve by admin //**** */ */
app.delete("/examens/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Examens Eleves By ID", id);
    Examen.deleteOne({ _id: id }).then((response) => {
        console.log("Here response examens eleves after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///****get examens by id ///***** */ */
app.get("/updateExamens/:y", (req, res) => {
    let id = req.params.y;
    console.log("Here into BL : Get examens By ID", id);
    Examen.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ principale: doc })
            : res.json({ message: "Examens does not exist" });
    });
})
///****update examens by admin ///*** */ */
app.put("/updateExamens", (req, res) => {
    console.log("here into BL:Edit Examens", req.body);

    Examen.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});


///***///publication generale teachers//*** */ */
// Business Logic : Add publication teachers //*** */
app.post("/publications", (req, res) => {
    console.log("Here into BL: Add Publication", req.body);
    let publication = new Publication({
        titre: req.body.titre,
        message: req.body.message,
        date : req.body.date,
        heure: req.body.heure,
        salle : req.body.salle,
        status: req.body.status,
        teachersId : req.body.teachersId,
       
    });
    console.log("here aded pub", publication);
    publication.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});
////Business Logic : Confirme Publication Generale
app.post("/publications/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Publication.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
//**** Buisness Logic : get all publications by aggregate //*** */ */
app.get("/publications/all", (req, res) => {
    console.log("here publications with comments");
    Publication.aggregate(
        [

            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "publications", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all pubs", docs);
            res.status(200).json({
                publications: docs,
            });
        }
    );

})
///*** Buisness Logic : publications by id**/// */
app.get("/publications/:id", (req, res) => {
    console.log("here publications with id", req.params.id);
    Publication.aggregate(
        [
            {
                $match: { teachersId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "teachers", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  pubs by teachers id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//*** Publications generales : consultes les publications confirmer *////
app.get("/publications/", (req, res) => {
    console.log("here publications with id", req.params.id);
    Publication.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "teachers", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  pubs by teachers id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//*****delete publications generales by admin //**** */ */
app.delete("/publications/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Publications Generales  By ID", id);
    Publication.deleteOne({ _id: id }).then((response) => {
        console.log("Here response publications generale after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///****get publications generale by id ///***** */ */
app.get("/publicationsGenerale/:p", (req, res) => {
    let id = req.params.p;
    console.log("Here into BL : Get patients By ID", id);
    Publication.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ generales: doc })
            : res.json({ message: "Publications generales does not exist" });
    });
})
///**** update publications generales by admin  */
app.put("/publicationsGenerale", (req, res) => {
    console.log("here into BL:Edit Publications Generales", req.body);

    Publication.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Publications generale is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});


///---------------------------------Notes des eleves------------------------------------------------------------------////
///*****Ajouter note  ***/////////////////////
app.post("/notes", (req, res) => {
    console.log("Here into BL: Add note teachers", req.body);
    let moy = new Note({
        nomeleve : req.body.nomeleve,
        nom: req.body.nom,
        section: req.body.section,
        niveau: req.body.niveau,
        note: req.body.note,
        coefficient: req.body.coefficient,
        semester: req.body.semester,
        remarque: req.body.remarque,
        status: req.body.status,
        teachersId : req.body.teachersId,
        
    });
    console.log("here add note students", moy);
    moy.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});

// Business Logic : Get All Note //**** */
app.get("/notes/all/note", (req, res) => {
    console.log("here notes with comments");
    Note.aggregate(
        [

            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "notes", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all notes", docs);
            res.status(200).json({
                notes: docs,
            });
        }
    );

})
////Business Logic : Confirme note des eleves
app.post("/notes/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Note.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
///*** Buisness Logic : note des eleves by id**/// */
app.get("/notes/:id", (req, res) => {
    console.log("here notes with id", req.params.id);
    Note.aggregate(
        [
            {
                $match: { teachersId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "teachers", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  pubs by note id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//*** Notes des eleves : consultes les notes confirmer *////
app.get("/notes/", (req, res) => {
    console.log("here notes with id", req.params.id);
    Note.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "teachers", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  notes by teachers id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//*****delete notes eleves by admin //**** */ */
app.delete("/notes/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete notes Eleves By ID", id);
    Note.deleteOne({ _id: id }).then((response) => {
        console.log("Here response notes eleves after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///****get notes by id ///***** */ */
app.get("/updateNotes/:y", (req, res) => {
    let id = req.params.y;
    console.log("Here into BL : Get notes By ID", id);
    Note.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ moyenne: doc })
            : res.json({ message: "notes does not exist" });
    });
})
///****update notes by admin ///*** */ */
app.put("/updateNotes", (req, res) => {
    console.log("here into BL:Edit Notes", req.body);

    Note.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});



///----------------------------------------------Login--------------------------------------------------------------------////
///Buisness Logic : Login ///*** */

app.post("/eleves/login",(req,res) =>{
    console.log("Here into login",req.body);
    let user;
    User.findOne({email: req.body.email}).then((doc) =>{
        if (!doc) {
            res.json({msg: "0"});
            
        }
        user = doc;
        return bcrypt.compare(req.body.password, doc.password);
    }).then(
        (pwdResponse) =>{
            console.log("here pwdResponse ",pwdResponse);
            if (!pwdResponse) {
                res.json({ msg: "1"});
                
            } else {
                // send user information {id , fName, lName, role}
                let userTosend = {
                    id : user._id,
                    fName: user.firstName,
                    lName: user.lastName,
                    role: user.role,
                };
                res.json({user:userTosend, msg: "2"});
                
            }
        });
});

///------------------------Cours--------------------------------------------------------///
//*****ajouter cours//*** */ */
app.post("/cours/ajouterCours", multer({ storage: storageConfig }).fields([{ name: 'cours', maxCount: 1 }]), (req, res) => {
    console.log("Here into BL: ajouterCours");
    const url = req.protocol + "://" + req.get("host");
    console.log("URL", url);
    
    // http://localhost:3006
   
        let cour = new Cour({
            titre: req.body.titre,
            reference: req.body.reference,
            section: req.body.section,
            status: req.body.status, 
            teachersId :req.body.teachersId,
           
            cours: url + "/images/" + req.files.cours[0].filename,

        });
        console.log("here add cour",cour);
        cour.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (error) {
                if (error.errors.reference) {
                    res.json({ message: "Reference exist" });
                }
               
            } else {
                res.json({message: "Added with success" });
                
            }
            

        });

    });
// Business Logic : Get All cours //**** */

app.get("/cours/all/cour/cour", (req, res) => {
    console.log("here cours with comments");
    Cour.aggregate(
        [

            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "box", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all cours", docs);
            res.status(200).json({
                box: docs,
                
            });
           
        }
    );

})
////Business Logic : Confirme cour teachers par admin
app.post("/cours/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Cour.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
///*** Buisness Logic : cours by id**/// */
app.get("/cours/:id", (req, res) => {
    console.log("here cours with id", req.params.id);
    Cour.aggregate(
        [
            {
                $match: { teachersId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "teachers", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  cours by cour id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//*** Cours des eleves : consultes les cours confirmer *////
app.get("/cours/", (req, res) => {
    console.log("here cours with id", req.params.id);
    Cour.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "teachers", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  cours by teachers id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
//*****delete cours eleves by admin //**** */ */
app.delete("/cours/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Cours Eleves By ID", id);
    Cour.deleteOne({ _id: id }).then((response) => {
        console.log("Here response cours eleves after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///****get cours by id ///***** */ */
app.get("/updateCours/:p", (req, res) => {
    let id = req.params.p;
    console.log("Here into BL : Get cours By ID", id);
    Cour.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ box: doc })
            : res.json({ message: "cours does not exist" });
    });
})
///****update cours by admin ///*** */ */
app.put("/updateCours", (req, res) => {
    console.log("here into BL:Edit Cours", req.body);

    Cour.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Cours is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});



//---------------------------Publications des eleves------------------------------------------///////////
// Business Logic : Add publication eleves //*** */
app.post("/envoyer", (req, res) => {
    console.log("Here into BL: Add Publication eleves", req.body);
    let envoyer = new envoie({
        titre: req.body.titre,
        message: req.body.message,
        status: req.body.status,
        studentsId : req.body.studentsId,
       
    });
    console.log("here aded pub", envoyer);
    envoyer.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});
//**** Buisness Logic : get all publications eleves by aggregate //*** */ */
app.get("/envoyer/all/envoie/envoie/envoie", (req, res) => {
    console.log("here publications eleves with comments");
    envoie.aggregate(
        [

            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "studentsId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "publications", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("here all pubs eleves", docs);
            res.status(200).json({
                publications: docs,
            });
        }
    );

})
///*** Buisness Logic : publications by id**/// */
app.get("/envoyer/:id", (req, res) => {
    console.log("here publications eleves with id", req.params.id);
    envoie.aggregate(
        [
            {
                $match: { studentsId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "studentsId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "students", // output array field
                },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "userId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "users", // output array field

                },

            },

        ],

        (error, docs) => {
            console.log("here  pubs by eleves id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})
////Business Logic : Confirme Publication Des eleves
app.post("/envoyer/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    envoie.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
//*** Notes des eleves : consultes les notes confirmer *////
app.get("/envoyer/", (req, res) => {
    console.log("here publications eleves with id", req.params.id);
    envoie.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "studentsId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "students", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  publications eleves confirmer by id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})

//*****delete publication eleve by admin //**** */ */
app.delete("/envoyer/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Publications Eleves By ID", id);
    envoie.deleteOne({ _id: id }).then((response) => {
        console.log("Here response publications eleves after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
///****get publications eleves by id ///***** */ */
app.get("/updatePublicationsEleves/:h", (req, res) => {
    let id = req.params.h;
    console.log("Here into BL : Get publications eleves By ID", id);
    envoie.findOne({ _id: id }).then((doc) => {
        console.log("here doc", doc);
        doc
            ? res.json({ formation: doc })
            : res.json({ message: "Publications eleves does not exist" });
    });
})
///****update publications eleves by admin ///*** */ */
app.put("/updatePublicationsEleves", (req, res) => {
    console.log("here into BL:Edit Publications eleves", req.body);

    envoie.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "Publications eleves is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});
///-----------------SEARCH BY TEACHERS-----------------------------------////
///****search  by teachers**///// */
app.post("/teachers/search", (req, res) => {
    let searchObj = req.body;
    console.log(searchObj);
    User.find({
      role: "teachers",
      
      //search by nom ou adresse ou section
      $or: [
        {adresse: searchObj.adresse },
        {firstName : searchObj.firstName},
        {section : searchObj.section},
      ],
    }).then((docs) => {
      res.json({ searchTab: docs });
    });
  });
  ////--------------------------BOUTON CONTACT IN HOME------------------------------/////////////
  ///**Buisness Logic : ADD CONTACT ///*****/
app.post("/contact", (req, res) => {
    console.log("Here into BL: Add Contact", req.body);
    let contact = new Contact ({
        nomPrenom: req.body.nomPrenom,
        email : req.body.email,
        titre: req.body.titre,
        message : req.body.message,
       

    });
    console.log("here aded contact", contact);
    contact.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
}); 
//**Buisness Logic : get all contact probleme in admin ****/
app.get("/contact/contact/all", (req, res) => {
    console.log("Here into BL: Get All Contact Problem");
    Contact.find().then((docs) => {
        res.json({ contact: docs });
    });
});
//****Buisness Logic : delete contact probleme width admin//**** */ */
app.delete("/contact/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete contact in home By ID", id);
    Contact.deleteOne({ _id: id }).then((response) => {
        console.log("Here response contact probleme after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});

//////------------------------Reponder Aux Reponse Eleves------------------------------//////////////
// Business Logic:Add Reponder Reponse
    // Business Logic:Add repondres
app.post("/repondres", (req, res) => {
        console.log("Here into BL: Add Publication", req.body);
        let publication = new Reponder({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            teachersId: req.body.teachersId,
        });
        console.log("here aded pub", publication);
        publication.save((error, doc) => {
            console.log("Here error", error);
            console.log("Here doc", doc);
            if (doc) {
                res.json({ message: "Added with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
    });

    ////Business Logic : Confirme repondre reponse teachers par admin
app.post("/repondres/status/:id", (req, res) => {
    console.log("here id ", req.params.id);
    let id = req.params.id;
    Reponder.updateOne({ _id: id }, { status: "confirmed" }).then((docs) => {
        (response) => {
            console.log("here response after update", response);
            if (response.modifiedCount == 1) {
                res.json({ message: `status N° : Edited with success` })
            } else {
                res.json({ message: `Not Edited` })
            }
        }
    })
})
 app.get("/repondres/all/repond/send/send/repond", (req, res) => {
        console.log("here repondres with comments");
        Reponder.aggregate(
            [
    
                {
                    $lookup: {
                        from: "users", // collection to join
                        localField: "teachersId", //field from the input documents
                        foreignField: "_id", //field from the documents of the "from" collection
                        as: "repondis", // output array field
                    },
                },
            ],
            (error, docs) => {
                console.log("here all repondre", docs);
                res.status(200).json({
                    repondis: docs,
                });
            }
        );
    
    })
    ///*** Buisness Logic : repondre reponse by id**/// */
 app.get("/repondres/:id", (req, res) => {
        console.log("here repondres with id", req.params.id);
        Reponder.aggregate(
            [
                {
                    $match: { teachersId: ObjectId(req.params.id) }, ///$match:pour filtrer les documents d'une collection
                },
                {
                    $lookup: {
                        from: "users", // collection to join
                        localField: "teachersId", //field from the input documents
                        foreignField: "_id", //field from the documents of the "from" collection
                        as: "teachers", // output array field
                    },
                },
                {
                    $lookup: {
                        from: "users", // collection to join
                        localField: "userId", //field from the input documents
                        foreignField: "_id", //field from the documents of the "from" collection
                        as: "users", // output array field
    
                    },
    
                },
    
            ],
    
            (error, docs) => {
                console.log("here  repondre reponse id", docs);
                res.status(200).json({
                    retenus: docs,
                });
            }
        );
    
    })

//consultes les repondre reponse confirmer *////
app.get("/repondres/", (req, res) => {
    console.log("here repondre reponse with id", req.params.id);
    Reponder.aggregate(
        [
            {
                $match: { status: "confirmed" },
            },
            {
                $lookup: {
                    from: "users", // collection to join
                    localField: "teachersId", //field from the input documents
                    foreignField: "_id", //field from the documents of the "from" collection
                    as: "teachers", // output array field
                },
            },


        ],
        (error, docs) => {
            console.log("here  repondre reponse by teachers id", docs);
            res.status(200).json({
                pubs: docs,
            });
        }
    );

})

    //*****delete repondre reponse by admin //**** */ */
app.delete("/repondres/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Examens Eleves By ID", id);
    Reponder.deleteOne({ _id: id }).then((response) => {
        console.log("Here response repondre reponse after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});
 //***** Weather by API */
 app.get("/weather/:obj",(req,res)=>{
    console.log("Here object",JSON.parse(req.params.obj));
    let ville = JSON.parse(req.params.obj).ville;
    let key ="1122374eb0970f8256d663f779a390bd"
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${key}`;
    axios.get(apiUrl).then((response)=>{
        console.log("Here weather response",response.data);
        let data = response.data;
        let result = {
            temperature: data.main.temp,
            humidity:data.main.humidity,
            wind: data.wind.speed,
            icone:  `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        };
        res.json({result: result});
    });
 } );
 //****sports by API *////
 app.post("/publicationsGenerale/apiSports", (req,res)=>{
    console.log("Here object",req.body);
    const countryValue = req.body.ville;
    const apiTeamsUrl ="";
    const key = "ec740d6d1fd218516e95cf108f96db1d";
    // axios.get(apiTeamsUrl).then();


var options = {
  method: 'GET',
  url: 'https://v3.football.api-sports.io/teams',
  qs: {country : countryValue},
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': key
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);
    let result = JSON.parse(body).response; 
	console.log(JSON.parse(body).response);
    res.json({ result: result});
});

 })





///---------App Exportation--------///
// make app importable from another files
module.exports = app;