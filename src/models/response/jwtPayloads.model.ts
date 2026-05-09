import { JwtPayload } from 'jsonwebtoken';

interface IJwtPayloads extends JwtPayload {
    email: string;
}

export default IJwtPayloads;