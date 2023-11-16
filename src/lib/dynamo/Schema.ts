import { Schema } from 'dynamoose';

const condominioSchema = new Schema({
	nome: String,
	id: Number
});

export { condominioSchema };
