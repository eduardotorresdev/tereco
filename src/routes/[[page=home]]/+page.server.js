export async function load(e) {
    try {
        const response = await e.fetch('/api/palavras');
        if (!response.ok) {
            throw new Error('Erro ao obter palavras');
        }
        const data = await response.json();
        return {
            palavras: data
        };
    } catch (error) {
        console.error(error);
    }
}