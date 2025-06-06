/*
function validarContraseña(password) {
    if (password.length < 8) {
        return false;
    }
    return true;
}
*/
module.exports = validarContraseña;

function validarContraseña(password) {
    if (typeof password !== 'string') return NaN;
    if (password.length < 8) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[!@#$%^&*()]/.test(password)) return false;
    if (/\s/.test(password)) return false;

    const palabrasSignificativas = ["Playa", "Gato", "2023", "Carrillo"]; // Se debe personalizar esta lista
    if (!palabrasSignificativas.some(palabra => password.includes(palabra))) return false;

    return true;
}





