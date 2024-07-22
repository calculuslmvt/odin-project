
export const protected  = ( req, res, next) => {

    // specify protcted routes

    try {
        next(); 
    } catch (error) {
        console.log(error); 
    }

    const isValidPth  = path === "/login" || "/logout" || "home";

    next(); 
    return value;

}