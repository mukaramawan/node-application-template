import { Config } from './config';
import app from './app';

function startServer() {
    const port = Config.PORT;
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
}

startServer();
