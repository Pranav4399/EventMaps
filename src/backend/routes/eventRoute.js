let express = require('express'),
router = express.Router();

let eventModel = require('../models/eventModel');
let eventController = require('../controllers/eventController');

router.post("/events/create", function (req, res) {
    console.log(res);
    // if (!req.body.email || !req.body.password) {
    //     // console.log("--- User Login Failed ---");
    //     res.json({ success: false });
    // } else {
    //     api.loginAdminUser(req.body.email, req.body.password, (apiResponse) => {
    //         if (!apiResponse.success) {
    //             res.json({ success: false });
    //         } else {
    //             const cookieSettings = {
    //                 path: "/",
    //                 expires: new Date( apiResponse.authTokenExpiresTimestamp * 1000),
    //                 httpOnly: true,
    //                 secure: process.env.NODE_ENV === "production",
    //                 encode: String,
    //                 domain:
    //                     process.env.NODE_ENV === "production"
    //                         ? tldjs.parse(config.prodAdminURL).domain
    //                         : "",
    //             };

    //             res.cookie(
    //                 "adminUser",
    //                 apiResponse.userId + "&" + apiResponse.authToken,
    //                 cookieSettings
    //             );

    //             // console.log("--- User Login Successfully ---");
    //             res.json({ success: true });
    //         }
    //     });
    // }
    res.send("Create Evebnt api is working");
});

// router.route('/events/create').post((req, res) => {
//     res.send("Create Event API is working");
//     console.log(req);
//     eventModel.create(req.body, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             console.log(data)
//             res.json(data)
//         }
//     })
// });

router.route('/').get((req, res) => {
    eventModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/edit/:id').get((req, res) => {
    eventModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/update/:id').put((req, res, next) => {
    eventModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    eventModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;