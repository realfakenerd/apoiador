import { aws } from 'dynamoose';

const ddb = new aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": "fakeMyKeyID",
        "secretAccessKey": "fakeSecretAccessKey"
    },
    "region": "us-east-1"
});
aws.ddb.local("http://localhost:8000");

export default ddb;
export * from './Schema';
export * from './Models';