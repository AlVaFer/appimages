import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'
import Jimp, { read } from 'jimp';
import crypto from ('crypto');



// Models
import Images, { IPhoto } from '../models/Images';



//Functions

export async function resizePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const image = await Jimp.read(`output/${id}.jpg`);
    
    image.resize(Jimp.AUTO,1024);  //scaled height, fixed width 
    await image.write(`output/1024/${id}.jpg`);

    image.resize(Jimp.AUTO,800);
    await image.write(`output/800/${id}.jpg`);

    return res.json({
        message: 'Two Scaled Copies Created Successfully' 
    });
};



export async function getPhotos(req: Request, res: Response): Promise<Response> {
    const photos = await Images.find();
    return res.json(photos);
};




export async function createPhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
   
    let md5 = crypto.createHash('md5').update(id).digest("hex");

    const image = await Jimp.read(`output/${id}.jpg`);
    const quality = 90;
    await image.quality(quality);
    const resolution = quality;

    const newPhoto = { resolution, md5, imagePath: req.file.path };
    const photo = new Images(newPhoto);
    await photo.save();
    return res.json({
        message: 'Photo Saved Successfully',
        photo
    });
};



export async function getPhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const photo = await Images.findById(id);
    return res.json(photo);
}



export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const photo = await Images.findByIdAndRemove(id) as IPhoto;
    if (photo) {
        await fs.unlink(path.resolve(photo.imagePath));
    }
    return res.json({ message: 'Photo Deleted' });
};



export async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { resolution, md5,  } = req.body;
    const updatedPhoto = await Images.findByIdAndUpdate(id, {
        resolution,
        md5
    });
    return res.json({
        message: 'Successfully updated',
        updatedPhoto
    });
}