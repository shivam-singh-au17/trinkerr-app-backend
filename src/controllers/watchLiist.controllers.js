const express = require("express");
const watchListData = require("../models/watchLiist.model");
const router = express.Router();

router.post("/watchListData", async (req, res) => {
    try {
        let watchListData = new watchListData(req.body);
        watchListData = await watchListData.save();
        res.status(200).json({
            status: 200,
            data: watchListData,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/watchListData", async (req, res) => {
    try {
        let users = await watchListData.find();
        res.status(200).json({
            status: 200,
            data: users,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/:watchListDataId", async (req, res) => {
    try {
        let watchListData = await watchListData.findOne({
            _id: req.params.watchListDataId,
        });
        if (watchListData) {
            res.status(200).json({
                status: 200,
                data: watchListData,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No watch List Data found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.put("/:watchListDataId", async (req, res) => {
    try {
        let watchListData = await watchListData.findByIdAndUpdate(req.params.watchListDataId, req.body, {
            new: true,
        });
        if (watchListData) {
            res.status(200).json({
                status: 200,
                data: watchListData,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No watch List Data found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.delete("/:watchListDataId", async (req, res) => {
    try {
        let watchListData = await watchListData.findByIdAndRemove(req.params.watchListDataId);
        if (watchListData) {
            res.status(200).json({
                status: 200,
                message: "watch List Data deleted successfully",
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No watch List Data found",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

module.exports = router;


