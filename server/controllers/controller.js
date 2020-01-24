const Pet = require('../models/models');

module.exports = {
    allPets: (req,res) => {
        Pet.find().sort({ type: 1 })
            .then(data => {
                res.json({ message: "success", results: data});
            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    onePet: (req,res) => {
        Pet.findOne({_id: req.params.id})
            .then(data => {
                res.json({ message: "success", results: data });

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    createPet: (req,res) => {
        Pet.create(req.body)
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    editPet: (req,res) => {
        Pet.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true, new: true })
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    deletePet: (req,res) => {
        Pet.findOneAndDelete({_id: req.params.id})
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    }
}