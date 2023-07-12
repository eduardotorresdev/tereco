import dados from '$lib/server/dados.js'
import { json } from '@sveltejs/kit';

export function GET() {
    return json(dados);
}