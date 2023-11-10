import { Request, Response } from 'express';

const currentUser = async (req: Request, res: Response) => {
  res.status(200).send({
    message: 'You are logged in, welcome to the app',
    user: req.currentUser,
    token: req.session?.jwt,
  });
};

export default currentUser;
