import alfy from 'alfy';
import process from 'node:process';

const input = alfy.input;
const envToken = process.env.apiToken;

if (!envToken) {
    alfy.error("Please configure the workflow and enter your Tana API token");
} else {
    alfy.output([
        {
            title: `Add "${input}"`,
            subtitle: "into tana",
            arg: input,
            variables: {
                // demoVar: "a demo value",
            },
        }
    ]);
}
