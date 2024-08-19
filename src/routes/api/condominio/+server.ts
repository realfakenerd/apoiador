import { db } from '$lib/db';
import {
	GetItemCommand,
	TransactWriteItemsCommand,
	type GetItemCommandInput,
	type TransactWriteItemsCommandInput
} from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async () => {
	const inputCommand: GetItemCommandInput = {
		TableName: 'denormalized_condominio',
		Key: marshall({
			denormalized_condominio_id: '1'
		})
	};

	const command = new GetItemCommand(inputCommand);
	const data = await db.send(command);

	return json(data);
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
	const data = (await request.json()) as Condominio;

	const endereco = `${data.endereco.tipo_logradouro} ${data.endereco.logradouro}, ${data.endereco.numero}`;

	const inputCommand: TransactWriteItemsCommandInput = {
		TransactItems: [
			{
				Put: {
					TableName: 'denormalized_condominio',
					Item: marshall({
						endereco,
						nome: data.nome,
						sindico: (data.sindico as Sindico).nome,
						demormalized_condominio_id: data.condominio_id
					})
				}
			},
			{
				Put: {
					TableName: 'condominio',
					Item: marshall(data)
				}
			}
		]
	};

	const command = new TransactWriteItemsCommand(inputCommand);
	const result = await db.send(command);

	console.log(result)
	return json(result);
}) satisfies RequestHandler;
