import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';

@WebSocketGateway({cors: ['http://localhost:4200']})
export class EventGateway {

  @WebSocketServer() server: Server;

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): void {
    client.emit('info', 'message privé');
    this.server.emit('info', 'Un message est arrivé au serveur');
  }
}
