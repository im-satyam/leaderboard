import { Server } from 'socket.io';
export const initSockets = (httpServer, { origin }) => {
const io = new Server(httpServer, {
cors: { origin, methods: ['GET', 'POST'] }
});
io.on('connection', (socket) => {
console.log('🔗 Client connected:', socket.id);
socket.on('disconnect', () => console.log('🔌 Client disconnected:', socket.id));
});
return io;
};