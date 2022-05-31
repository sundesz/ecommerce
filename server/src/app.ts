import 'module-alias/register';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import logger from 'morgan';
import session from 'express-session';
import SequelizeStore from 'connect-session-sequelize';
import { errorHandler, unknownEndpoint } from './middleware';
import { COOKIE_EXPIRE_TIME, SECRET_KEY } from './config';
import { sequelize } from './db';
import {
  ICartAttributes,
  IPageAttributes,
  IProductAttributes,
  IProductCategoryAttributes,
} from './db/types';
import {
  authenticationRouter,
  pageRouter,
  productCategoryRouter,
  productImageRouter,
  productRouter,
  userRouter,
} from './api/routers';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      page?: IPageAttributes | null;
      pageCategory?: IProductCategoryAttributes | null;
      product?: IProductAttributes | null;
      cart?: ICartAttributes | null;
    }
  }
}

declare module 'express-session' {
  interface SessionData {
    isAuth?: boolean;
    views?: number;
    data: {
      name?: string;
      username?: string;
      userId?: string;
    };
    // cookie?: CookieOptions | undefined;
  }
}

const app: Application = express();
const sequelizeStore = SequelizeStore(session.Store);

const sessionStore = new sequelizeStore({
  db: sequelize,
  table: 'Session',

  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
  expiration: 60 * 1000, // The maximum age (in milliseconds) of a valid session.
});

const sessionConf = {
  // secret: 'keyboard cat',
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    secure: false,
    sameSite: true,
    maxAge: COOKIE_EXPIRE_TIME,
  },
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sessionConf.cookie.secure = true;
}

app.use(session(sessionConf));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  console.log(sessionStore);
  console.log(req.sessionID);
  if (req.session.views) {
    req.session.views++;
    // req.setHeader('Content-Type', 'text/html');
    // res.write(`<p>views: ${req.session.views}</p>`);
    // res.write(`<p>expires in: ${req.session.cookie.maxAge / 1000}</p>`);
    // res.end();
    res.send(
      `<p>views: ${req.session.views}</p>`
      // `<p>views: ${req.session.views}</p> <br> <p>expires in: ${
      //   req.session.cookie.maxAge / 1000
      // }</p>`
    );
  } else {
    req.session.views = 1;
    res.send('welcome to the session demo. refresh!');
  }
});

app.use('/api/v1/auth', authenticationRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/pages', pageRouter);
app.use('/api/v1/product_categories', productCategoryRouter);
app.use('/api/v1/product_images', productImageRouter);
app.use('/api/v1/products', productRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;

// TODO:: hide all react-dev and redux-dev in production mode

// declare global {
//   // eslint-disable-next-line @typescript-eslint/no-namespace
//   namespace NodeJS {
//     interface ProcessEnv {
//       PORT: string;
//       NODE_ENV: 'development' | 'production';
//       DB_URI: string;
//     }
//   }
// }
