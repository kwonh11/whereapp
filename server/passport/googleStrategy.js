const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../schemas/user");

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const exUser = await User.findOne({
            snsId: profile.id,
            provider: "google",
          });
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = new User({
              snsId: profile.id,
              nick: profile.displayName,
              provider: "google",
              image: profile._json.picture,
            });
            newUser.save();
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
