import axios from 'axios';

// Configuración básica
const API_KEY = 'live_omQXRvm6lBpgQjFqJJck9RIeEj3GFRLg0ilGlhGgmNJho6g9Ybw0HNwDHgX5Qiaf'; // Reemplaza con tu API Key
const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: { 'x-api-key': API_KEY }
});

// Función principal para obtener gatos
export async function getCats(limit = 3) {
  try {
    const response = await api.get(`/images/search?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener gatos:', error.message);
    return [];
  }
}

// Uso básico (ejemplo)
async function main() {
  const cats = await getCats();
  console.log('🐱 Gatos obtenidos:');
  cats.forEach(cat => console.log(`- ${cat.url}`));
}

main();