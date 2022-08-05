import express from "express";
import passport from "passport";

const router = express.Router();


router.get('/secure',passport.authenticate('jwt', {session: false}) ,(req, res) => {
  res.json({
    message: 'You made it to the secure route',
    user: req.user,
    token: req.query.secret_token
  })
})





export default router;