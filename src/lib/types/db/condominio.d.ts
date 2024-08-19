interface Condominio {
	condominio_id: string;
	nome: string;
	unidade: number;
	cnpj: string;
	sindico: string | Sindico;
	funcionarios: string[];
	adm_atual: string;
	construtora: string;
	tipo_condominio: TipoCondominio;
	telefone: string;
	email: string;
	endereco: Endereco;
	condominos: Condominos[];
}

const enum TipoCondominio {
	residencial = 'res',
	comercial = 'com',
	misto = 'mix'
}

const enum TipoLogradouro {
	rua = 'r',
	avenida = 'av',
	travessa = 'tr',
	rodovia = 'rod',
	alameda = 'alam',
	via = 'via',
	praca = 'prac',
	estrada = 'est'
}

interface Endereco {
	tipo_logradouro: TipoLogradouro;
	logradouro: string;
	numero: number;
	bairro: string;
	cidade: string;
	estado: string;
	complemento: string;
	cep: string;
}

interface Condominos {
	condonio_id: string;
	nome: string;
	unidade: number;
	telefone: string;
	email: string;
	cpf: string;
}

interface Sindico extends Condominos {
	endereco: Endereco;
}
