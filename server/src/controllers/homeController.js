
const homeController =  (req,res) => {
    return res.send("Hello")
}

const testEjsController = (req,res) => {
    return res.render('test.ejs')
}

module.exports = {
    homeController:homeController,
    testEjsController:testEjsController
}