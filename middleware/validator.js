const {check, validationResult}=require("express-validator");
exports.regiterRules = () =>[
        check("name","Name is required").notEmpty(),
        check("lastName","lastName is required").notEmpty(),
        check("email","email is required").notEmpty(),
        check("email","check email again").isEmail(),
        check("password","password must be bettwen 6 and 20 caracter").isLength({
            min:6,
            max:20

        }),


        
];
   



exports.loginRules = () =>[
        check("email","email is required").notEmpty(),
        check("email","check email again").isEmail(),
        check("password","password must be bettwen 6 and 20 caracter").isLength({
            min:6,
            max:20

        }),


        
];
 




exports.validation = (req,res,next) => {
 const   errors=validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            errors:errors.array().map((el) => ({ 
                msg: el.msg,
            })),
        });

    }
    next();
    


};