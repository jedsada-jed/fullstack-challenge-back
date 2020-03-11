import * as express from 'express'

export const unless = (middleware: Function, ...paths: string[]) => {
  return (req: express.Request, res: express.Response, next: Function) => {
    const pathCheck = paths.some(path => path === req.path);
    !pathCheck ? next() : middleware(req, res, next);
  };
};