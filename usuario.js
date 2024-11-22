async function validarUsuario(objLoginSenha) {
    try {
        const response = await fetch('https://app-p2-aab7c7fdddb8.herokuapp.com/usuarios/validar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(objLoginSenha),
        });

        if (!response.ok) {
            throw new Error('Falha na validação do usuário');
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Erro na validação:', error);
        return false; 
    }
}

async function login(event) {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const objLoginSenha = { email, senha };

    const validacao = await validarUsuario(objLoginSenha);

    if (validacao) {
        window.location.href = 'mensagens.html';
    } else {
        alert('E-mail e Senha inválidos');
    }
}
