const {getTypeControllers} = require('../controllers/typesControllers/getTypeControllers');

const getTypeHandler = async (req, res) => {
    try{
        const response = await getTypeControllers();
        res.status(200).json(response);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
    
};

module.exports = {
    getTypeHandler
}