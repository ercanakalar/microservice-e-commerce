import { WebSocket } from 'ws';

export class Publisher {
    private wss: any;

    constructor(port: number) {
        this.wss = new WebSocket.Server({ port });
        this.wss.on('connection', (ws: WebSocket) => {
            console.log('Auth connected');
        });
    }
}