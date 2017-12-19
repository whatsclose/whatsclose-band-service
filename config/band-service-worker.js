import envalid from 'envalid';

const config = envalid.cleanEnv(process.env, {
    SERVICE_NAME: envalid.str(),
});

export default config;
