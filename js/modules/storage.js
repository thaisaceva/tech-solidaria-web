const STORAGE_KEY = 'tech_solidaria_cadastros';

export function saveCadastro(novoCadastro) {
    try {
        const cadastros = getCadastros();
        cadastros.push({
            ...novoCadastro,
            dataRegistro: new Date().toISOString()
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cadastros));
        return true;
    } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
        return false;
    }
}

export function getCadastros() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Erro ao ler do localStorage:', error);
        return [];
    }
}