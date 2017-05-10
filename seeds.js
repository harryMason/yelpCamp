var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://farm1.staticflickr.com/661/32853307921_c804935e58.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, odio, molestias corporis error modi quidem! Mollitia, consectetur, sequi quaerat porro ducimus omnis provident recusandae accusamus eos reprehenderit et eum excepturi."
        },
        {
            name: "Bush Camp",
            image: "https://farm4.staticflickr.com/3539/3314646074_cb608e578b.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, odio, molestias corporis error modi quidem! Mollitia, consectetur, sequi quaerat porro ducimus omnis provident recusandae accusamus eos reprehenderit et eum excepturi."
        },
        {
            name: "Trailer park Camp",
            image: "https://farm4.staticflickr.com/3790/13379308583_f7b87a5e45.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, odio, molestias corporis error modi quidem! Mollitia, consectetur, sequi quaerat porro ducimus omnis provident recusandae accusamus eos reprehenderit et eum excepturi."
        }
    ];

function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds!");
        }
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                 if(err){
                     console.log(err);
                 } else {
                     console.log("added new campground!");
                    //  create a comment
                    Comment.create(
                    {
                        text: "This camp is great, but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment");
                        }
                    });
                 }
            });
        });
    });
    
    // add a few comments
}

module.exports = seedDB;