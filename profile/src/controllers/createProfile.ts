import { Request, Response } from 'express';

const createProfile = async (req: Request, res: Response) => {
  console.log(req.currentUser);
};

export default createProfile;
