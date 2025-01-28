import { startServer } from './server.js';
import { initMangoDB } from './db/initMangoDB.js';

const bootstrap = async () => {
    await initMangoDB();
    startServer();
};
bootstrap();