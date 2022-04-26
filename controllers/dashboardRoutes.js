const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/edit/:id", withAuth, (req, res) => {

  Post.findByPk(req.params.id)

    .then(dbData => {

      if (dbData) {

        const post = dbData.get({ plain: true });
        
        res.render("editPost", {

          layout: "dashboard",

          post

        });

      }
    })

    .catch(err => {

      res.status(500).json(err);
      
    });
});


router.get("/", withAuth, (req, res) => {

    Post.findAll({

      where: {

        userId: req.session.userId

      }
    })
      .then(dbData => {

        const posts = dbData.map((post) => post.get({ plain: true }));

        
        res.render("allPostsAd", {

          layout: "dashboard",

          posts

        });
      })
      .catch(err => {

        console.log(err);

        res.redirect("login");

      });
  });

  router.get("/new", withAuth, (req, res) => {

    res.render("newPost", {

      layout: "dashboard"

    });
  });
  
module.exports = router;