import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { startStandaloneServer } from '@apollo/server/standalone';
import { expressMiddleware } from '@apollo/server/express4';

import express from 'express';
import http from 'http';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { json } from 'body-parser';

import typeDefs from './models/user-schema';
import resolvers from './models/user-resolvers';
import { signUpRouter } from './routes/userRoutes';
import { NotFoundError } from './errors';
import { errorHandler } from './middlewares';

class App {
  public app: express.Application;
  public httpServer: http.Server;
  public server: any;

  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
  }

  public middleware(): void {
    this.app.set('trust proxy', true);
    this.app.use(json());
    this.app.use(
      cookieSession({
        signed: false,
        secure: false,
        // expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 60 * 1000), // 7 days
      })
    );
    this.app.use(cors());
    this.app.use('/api/users', signUpRouter);

    this.app.all('*', async () => {
      throw new NotFoundError();
    });
    this.app.use(errorHandler);
  }

  public async run(): Promise<void> {
    this.middleware();
    this.server = new ApolloServer({
      typeDefs: typeDefs,
      resolvers: resolvers,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),

      ],
      status400ForVariableCoercionErrors: true,
    });

    const { url } = await startStandaloneServer(this.server, {
      context: async ({ req, res }) => ({ req, res }),
      listen: { port: 4000, path: '/api/users' },
    });
    console.log(`🚀 Server ready at ${url}`);
  }
}

export default App;
