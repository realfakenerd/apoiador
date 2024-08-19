import {
	DynamoDBClient
} from '@aws-sdk/client-dynamodb';

const db = new DynamoDBClient({
	endpoint: 'http://localhost:8000',
	region: 'local',
	credentials: {
		accessKeyId: 'local',
		secretAccessKey: 'local'
	}
});

export { db };

