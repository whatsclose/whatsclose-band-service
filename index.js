import logger from 'vendor/logger/index';
import amqp from 'vendor/amqp/index';

logger.debug(`Connecting`);
amqp.connect();


amqp.subscribe(amqp.CHANNEL.foo, (msg) => {
    logger.info(`Received a message: ${JSON.stringify(msg)}`);
});


/* process.on(`SIGINT`, () => {
    logger.debug(`SIGINT Gracefully closing queue`);
    amqp.disconnect();
    process.exit();
});

process.on(`SIGTERM`, () => {
    logger.debug(`SIGTERM Gracefully closing queue`);
    amqp.disconnect();
    process.exit();
}); */
