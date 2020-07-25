import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/db-Connect';
import Note from '../../../models/notes';

dbConnect();
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'POST':
      try {
        const note = await Note.create(req.body);
        res.status(201).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, message: 'Cannot Match Route' });
      break;
  }
};
