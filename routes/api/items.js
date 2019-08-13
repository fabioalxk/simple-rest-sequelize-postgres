const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");

// List all items
router.get("/", (req, res) => {
  Item.findAll()
    .then(items => res.json(items))
    .catch(err => res.status(400).json(err));
});

// Add items
router.post("/", (req, res) => {
  Item.create({
    name: req.body.name
  })
    .then(item => res.json(item))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  Item.findByPk(req.params.id)
    .then(item => {
      Item.destroy({
        where: {
          id: item.id
        }
      })
        .then(() => {
          res.json({ success: true });
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
