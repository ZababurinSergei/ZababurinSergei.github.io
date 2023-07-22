import path from "path";
import fs from 'node:fs/promises'
import process from 'process';
let __dirname = process.cwd();
import nodemailer from 'nodemailer'
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";
import proxy from "express-http-proxy";
import * as dotenv from 'dotenv'
import JiraApi from 'jira-client';
dotenv.config()

export const modules = async (app) => {
    return {
        nodemailer: nodemailer,
        cors: cors,
        Enqueue: Enqueue,
        compression: compression,
        proxy: proxy,
        JiraApi: JiraApi,
        __dirname: __dirname,
        process: process
    }
}

export default {
    description: 'server welcomebook'
}