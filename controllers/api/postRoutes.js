const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {

  const body = req.body;

  console.log(req.session.userId);

  Post.create({ ...body, userId: req.session.userId })

    .then(post => {

      res.json(post);

    })

    .catch(err => {

      res.status(500).json(err);

    });
});


router.delete("/:id", withAuth, (req, res) => {

  console.log(req.body, req.params.id)

  Post.destroy({

    where: {

      id: req.params.id

    }
  })
    .catch(err => {

      res.status(500).json(err);
      
    });
});

router.put("/:id", withAuth, (req, res) => {

  console.log(req.body, req.params.id)

  Post.update(req.body, {

    where: {

      id: req.params.id

    }
  })
    .catch(err => {

      res.status(500).json(err);

    });
});


module.exports = router;