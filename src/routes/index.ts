import { Router } from 'express'
const router = Router();

import upload from '../libs/multer'
import { getPhotos, createPhoto, deletePhoto, getPhoto, updatePhoto, resizePhoto } from '../controllers/photo.controller'

// middleware
// router.use(upload.single('image'));

// routes
router.route('/task')
    .get(getPhotos)
    .post(upload.single('image'), createPhoto)
    .post(resizePhoto);

router.route('/task/:taskId')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto);

export default router;