import * as express from 'express'
import product from '../models/product'
import ProductModel from '../models/product';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const data: ProductModel[] = await product.findAll()
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.get('/:id', async (req: express.Request, res: express.Response) => {
  try {
    const data = await product.findOne({
      where: {
        id: req.params.id
      },
    });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.post('/', async (req: express.Request, res: express.Response) => {
  try {
    const data = await product.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.put('/:id', async (req: express.Request, res: express.Response) => {
  try {
    await product.upsert({
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      updatedAt: new Date()
    });
    res.json({ data: true });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.delete('/:id', async (req: express.Request, res: express.Response) => {
  try {
    const ressult = await product.destroy({
      where: {
        id: req.params.id
      },
    });
    res.json({ data: ressult == 1 });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

export default router;
