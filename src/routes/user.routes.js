import { Router } from "express";
import { loginUser, logoutUser, registerUser , refreshAccessToken} from "../controllers/user.controller.js";
// import { login } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar", // Ensure this matches the field name in your request
            maxCount: 1
        },
        {
            name: "coverImage", // Ensure this matches the field name in your request
            maxCount: 1
        }
    ]),
    registerUser
);

router. route ("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT , logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

export default router;