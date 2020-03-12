import * as express from 'express'
import * as productController from '../controllers/productController'

const router = express.Router();

router.get('/', productController.GetProducts);
router.get('/:id', productController.GetProductById);

router.post('/', productController.CreateProduct);

router.put('/:id', productController.UpdateProduct);

router.delete('/:id', productController.DeleteProduct);

export default router;
