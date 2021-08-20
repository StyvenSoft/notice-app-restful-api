import Session, { SessionDocument } from "../model/session.model";

export async function createSession(userId: string, userAgent: string) {
    const session = await Session.create({ user: userId, userAgent });

    return session.toString();
}