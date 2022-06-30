import 'dotenv/config';
import { server } from './server.js';

const PORT = process.env.PORT || 4000;

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
