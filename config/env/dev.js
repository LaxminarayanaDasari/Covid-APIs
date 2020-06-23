'use strict';

export default {
    app: {
        title: 'Covid Development',
        description: 'Covid Description'
    },
    db: {
        mongodb: {
            uri: 'mongodb://localhost:27017/covid',
            options: {
                user: '',
                pass: ''
            },
            debug: process.env.MONGODB_DEBUG || false
        }
    },
    jwt: {
        secret: 'pP30IOgnryY5OzIzarp1eOB6bgZ21llmH',
        expiresIn: '365d'
    },
    sendgrid: {
        apiKey: '<key>',
        defaultEmailFromName: 'no reply bot - Covid',
        defaultEmailFrom: 'no-reply@Covid.com'
    },
    winston: {
        console: {
            colorize: true,
            timestamp: true,
            prettyPrint: true
        },
        file: {
            filename: 'logs/error.log',
            timestamp: true,
            maxsize: 2048,
            json: true,
            colorize: true,
            level: 'error'
        }
    },
    awsS3: {
        bucketName: 'Covid-dev',
    },
    website: 'http://localhost:3000',
    version: 'v1.0',
    api: 'http://localhost:90',
    port: process.env.PORT || 100
};
