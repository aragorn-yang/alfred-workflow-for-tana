import axios from "axios";
import alfy from 'alfy';
import process from 'node:process';

console.log(alfy.input);
const input = alfy.input;
const envToken = process.env.apiToken;

// const demoVar = process.env.demoVar;
// alfy.log(`${demoVar} is passed in`);

if (!envToken) {
    alfy.error(envToken);
} else {
    const TANA_URL = "https://europe-west1-tagr-prod.cloudfunctions.net";

    const nodeApi = axios.create({
        baseURL: TANA_URL,
        headers: {
            authorization: `Bearer ${envToken}`,
        },
    });

    const res = await nodeApi.get("/addToNode", {
        params: { note: input },
    });

    if (typeof res.data === "object" && res.data.err) {
        alfy.error(res.data.err);
    } else {
        alfy.output([
            {
                title: "Successfully added",
                subtitle: "love tana",
            }
        ]);
    }
}
