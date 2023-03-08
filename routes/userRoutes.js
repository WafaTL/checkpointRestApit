const router =require ('express').Router();
const { saveContact } = require('../controllers/userController');
const { deleteContact } = require('../controllers/userController');
const { updateContact } = require('../controllers/userController');
const { getContacts } = require('../controllers/userController');
const contactController=require('../controllers/userController');
router.get('/',getContacts);
router.post('/',saveContact);
router.put('/:id',updateContact);
router.delete('/:id',deleteContact);


module.exports=router;