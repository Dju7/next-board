import { Server, Socket } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';

export default function SocketHandler(req: NextApiRequest, res: NextApiResponse) {
    
    const io = new Server();

    io.attach(res.socket as any);

    io.on("connection", (socket: Socket) => {
        socket.on("send-message", (obj) => {
            io.emit("receive-message", obj);
        });
    });

    res.end();
}