const db = require('../models');
const multer = require('multer');
const path = require('path');
const Review = db.review;

// Configure multer for audio file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Destination folder for audio files
    },
    filename: (req, file, cb) => {
        const fileNameArr = file.originalname.split('.');
        cb(null, `recording-${Date.now()}.${fileNameArr[fileNameArr.length - 1]}`); // Rename file to prevent collisions
    }
});


const upload = multer({
    storage: storage,
    limits: { fileSize: 5000000 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        const allowedFileTypes = /mp3|wav|ogg/;
        const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = /audio\/mpeg|audio\/wav|audio\/ogg/.test(file.mimetype.toLowerCase());

        console.log('File extension:', path.extname(file.originalname).toLowerCase());
        console.log('MIME type:', file.mimetype.toLowerCase());

        if (extname && mimetype) {
            return cb(null, true); // File accepted
        } else {
            console.log('File rejected');
            cb(new Error('Please upload a file with a valid format (mp3, wav, ogg)')); // File rejected
        }
    }
}).single('audio'); // Handle single audio file uploads

// Create Unit API 
const addCall = async (req, res) => {
    try {
        console.log('Request file:', req.file); // Log the file object
        const info = {
            audio: req.file.path,
            answer: req.body.answer,
            category: req.body.category,
        };
        const review = await Review.create(info);
        return res.status(200).json({
            status: "ok",
            data: review
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

const getCall = async (req, res) => {
    try {
        const reviews = await Review.findAll({});
        return res.status(200).json({
            status: "ok",
            data: reviews
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

const getCallById = async (req, res) => {
    try {
        const review = await Review.findOne({ where: { id: req.params.id } });
        return res.status(200).json({
            status: "ok",
            data: review
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};
const getCategoryCall = async (req, res) => {
    try {
        const review = await Review.findAll({ where: { category: req.params.CategoryName} });
        return res.status(200).json({
            status: "ok",
            data: review
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

const updateCall = async (req, res) => {
    try {
        await Review.update({ ...req.body }, { where: { id: req.params.id } });
        const updatedReview = await Review.findOne({ where: { id: req.params.id } });
        return res.status(200).json({
            status: "ok",
            data: updatedReview
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

const deleteCallById = async (req, res) => {
    try {
        await Review.destroy({ where: { id: req.params.id } });
        return res.status(200).json({
            status: "ok",
            message: "Review deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports = {
    addCall,
    getCall,
    getCallById,
    updateCall,
    deleteCallById,
    upload,
    getCategoryCall
};
