import { Jwt } from "../Service";

const auth = async (req, res, next) => {

    let authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.json({ data: "token not found" });
    }

    const token = authHeader.split(" ")[1];

    try {

        const { id, name } = await Jwt.verify(token);
        if (!id) {
            return res.json({ data: "not verified" })
        }
        const user = {
            name, id
        }
        req.user = user;

    } catch (error) {
        console.log("wewe");
        return next(error);
    }

    next();
}

export default auth;