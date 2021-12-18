const express = require("express");
const WatchListData = require("../models/watchLiist.model");
const router = express.Router();

router.post("/watchListData", async (req, res) => {
    try {
        let watchListData = new WatchListData(req.body);
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
        let users = await WatchListData.find();
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

router.get("/watchListData/:watchListDataId", async (req, res) => {
    try {
        let watchListData = await WatchListData.findOne({
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

router.put("/watchListData/:watchListDataId", async (req, res) => {
    try {
        let watchListData = await WatchListData.findByIdAndUpdate(req.params.watchListDataId, req.body, {
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

router.delete("/watchListData/:watchListDataId", async (req, res) => {
    try {
        let watchListData = await WatchListData.findByIdAndRemove(req.params.watchListDataId);
        if (watchListData) {
            res.status(200).json({
                status: 200,
                message: "Watch List Data deleted successfully",
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


