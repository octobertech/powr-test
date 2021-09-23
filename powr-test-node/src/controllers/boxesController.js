require('dotenv').config();
const redis = require('redis');
const uuid = require('uuid');
const uuidv4 = uuid.v4;


const getByKey = async (key) => {
    const client = redis.createClient({
        socket: {
            url: process.env.REDIS_ENDPOINT_URI
        }
    });
    client.on('error', (err) => console.error('Redis Client Error', err));

    await client.connect();

    return await client.get(key);
};

const setByKey = async (key, value) => {
    const client = redis.createClient({
        socket: {
            url: process.env.REDIS_ENDPOINT_URI
        }
    });
    client.on('error', (err) => console.error('Redis Client Error', err));
    await client.connect();

    return await client.set(key, value);
};

class BoxesController {

    async findBoxes(req, res, next) {
        try {
            const {boxId} = req.params;
            const result = await getByKey(boxId);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    };

    async setBoxes(req, res, next) {
        try {
            const jsonInput = req.body;
            const newId = uuidv4();
            const result = await setByKey(newId, JSON.stringify(jsonInput))
            res.status(200).json({id: newId});
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new BoxesController;