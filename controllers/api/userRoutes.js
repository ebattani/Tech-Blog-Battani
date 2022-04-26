const router = require("express").Router();
const { User } = require("../../models");

router.post("/", (req, res) => {

  User.create({

    username: req.body.username,

    password: req.body.password

  })

  .then(userData => {

    req.session.save(() => {

      req.session.userId = userData.id;

      req.session.username = userData.username;

      req.session.loggedIn = true;

      res.json(userData);

    });
  })
  .catch(err => {

    console.log(err);

    res.status(500).json(err);

  });
});


router.post('/logout', (req, res) => {

  if (req.session.loggedIn) {

    req.session.destroy(() => {

      res.status(204).end();

    });
  }
  else {

    res.status(404).end();

  }
});


router.post("/login", (req, res) => {

  User.findOne({

    where: {

      username: req.body.username

    }

  }).then(userData => {

    if (!userData) {

      res.status(400).json({ message: 'Incorrect username or password' });

      return;
    }

    const password = userData.checkPassword(req.body.password);

    if (!password) {

      res.status(400).json({ message: 'Incorrect username or password' });

      return;

    }

    req.session.save(() => {

      req.session.userId = userData.id;

      req.session.username = userData.username;

      req.session.loggedIn = true;
  
      res.json({ user: userData, message: 'You logged in' });
    });
  });
});


module.exports = router;