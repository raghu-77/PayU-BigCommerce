import { NextApiRequest, NextApiResponse } from 'next';
import { encodePayload, getBCVerify, setSession, getSession } from '../../lib/auth';

export default async function load(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Verify when app loaded (launch)
        const session = await getBCVerify(req.query);
        const encodedContext = encodePayload(session); // Signed JWT to validate/ prevent tampering
        // const { accessToken, storeHash } = await getSession(req);
        // console.log("Session", accessToken);
        
 
        await setSession(session);
        res.redirect(302, `/?context=${encodedContext}`);
    } catch (error) {
        const { message, response } = error;
        res.status(response?.status || 500).json({ message });
    }
}