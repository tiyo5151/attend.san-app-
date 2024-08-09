import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = new Hono();

app.get('/', (c) => c.text('Hello Hono!'));

// ルートの追加をここに記述

export default app;
