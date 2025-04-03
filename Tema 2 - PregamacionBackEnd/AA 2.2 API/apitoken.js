
import axios from 'axios';

//Configuración
const API_URL = 'https://api.github.com';
const VALID_TOKEN = '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'; // Se reemplaza con el token de github
const INVALID_TOKEN = 'token-invalido-123';

//validar token
async function validateToken(token) {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      },
    });
    
    return {
      isValid: true,
      userData: {
        name: response.data.name,
        username: response.data.login,
        publicRepos: response.data.public_repos
      }
    };
  } catch (error) {
    return {
      isValid: false,
      error: error.response?.data?.message || 'Error de conexión'
    };
  }
}


async function testTokens() {
  console.log('🔍 Probando token válido...');
  const validResult = await validateToken(VALID_TOKEN);
  
  if (validResult.isValid) {
    console.log('✅ Token válido');
    console.log('👤 Usuario:', validResult.userData.username);
  } else {
    console.log('❌ Error con token válido:', validResult.error);
  }

  console.log('\n🔍 Probando token inválido...');
  const invalidResult = await validateToken(INVALID_TOKEN);
  
  if (!invalidResult.isValid) {
    console.log('✅ Comportamiento correcto - Token inválido rechazado');
    console.log('🛑 Error esperado:', invalidResult.error);
  } else {
    console.log('❌ Error: El token inválido fue aceptado');
  }
}


testTokens();