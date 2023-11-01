const { json } = require("express");
const { VechileModel : Vechile } = require("../../models");
const { PostModel : Post } = require("../../models"); 

const Home = async (req, res) => {
    const { query } = req.query;

    let responce = await Post.find({ active : true , popular : true })
    .then((data) => {
        return res.status(200).json({
            message: "All Posts",
            post: data,
            ok: true,
        });
    })
    .catch((err)=>{
        console.log(err);
        return res.status(400).json({ message: err.message, ok: false });
    })
    // try { 
    //     if (!query)
    //     return res.status(400).json({
    //         message: "Something Went Wrong",
    //         ok: false,
    //     });
    //     // first dp 
    //     await Post.aggregate([
    //         { $sort: { rating: -1 } },
    //         { $limit: 1 }
    //       ]).toArray(function(err, results) {
    //         //second dp
    //         Vechile.find({ active : true }).toArray(function(err, results2) {
    //             return res.status(201).json({
    //                 message: "Data Fetchec Success",
    //                 dataPost: results,
    //                 vechiledata : results2,
    //                 ok: true,
    //             });
    //         })
    //       })
        
    // } catch (err) {
    //     console.log(err);
    //     return res.status(400).json({ message: err.message, ok: false });
    // }
};

exports.HomeController = {
    Home
};
