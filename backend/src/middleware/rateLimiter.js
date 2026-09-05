import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // use user.id instead of "my-limit-key" to do per user ID
    const { success } = await ratelimit.limit("my-limit-key");
    if (!success) {
      return res.status(429).json({
        message: "Too many reuqests,please try again later",
      });
    }
    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
