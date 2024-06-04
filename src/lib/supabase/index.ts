import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';


export interface Prospeccao {
    head: string[];
    content: Content[];
}

export interface Content {
    'nome do condomínio': string;
    endereço: Endereço;
    numero: string;
    bairro: Bairro;
    sindico: string;
    apto: string;
    telefone: '(21) 0000-0000' | `(21) 9 ${number}-${number}`;
    unidades: string;
    administradora: string;
    funcionarios: string;
    data: string;
    id: ReturnType<Crypto['randomUUID']>;
}

export const enum Bairro {
    Leblon = 'LEBLON'
}

export const enum Endereço {
    BartolomeuMitre = 'BARTOLOMEU MITRE',
    GenArtigas = 'GEN. ARTIGAS',
    GenSANMartin = 'GEN. SAN MARTIN',
    GenUrquiza = 'GEN. URQUIZA',
    GenVenancioFlores = 'GEN. VENANCIO FLORES',
    JoseLinhares = 'JOSE LINHARES',
    JoãoLira = 'JOÃO LIRA'
}


const supabase = createClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);



export default supabase;
export {
    supabase
}