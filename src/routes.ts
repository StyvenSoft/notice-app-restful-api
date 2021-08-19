import { Express, Request, Response } from 'express';
import { createUserHandler, createUserSessionHandler } from './controller/user.controller';
import validateRequest  from './middleware/validateRequest';
import { createUserSchema, createUserSessionSchema } from './schema/user.shema';

export default function (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    // Register User
    // POST/api/user
    app.post("api/users", validateRequest(createUserSchema), createUserHandler);

    // Login 
    app.post(
        "/api/sessions",
        validateResquest(createUserSessionSchema),
        createUserSessionHandler
    );

}