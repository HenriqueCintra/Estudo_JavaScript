const sistemaCadastro = {
    usuarios: [],

    adicionarUsuario: function(nome, idade, email) {
        const novoUsuario = { nome, idade, email };
        this.usuarios.push(novoUsuario);
        console.log(`Usuário ${nome} adicionado com sucesso.`);
    },

    buscarUsuario: function(email) {
        const usuario = this.usuarios.find(usuario => usuario.email === email);
        if (usuario) {
            return usuario;
        } else {
            return null;
        }
    },

    listarUsuarios: function() {
        console.log("Lista de Usuários:");
        this.usuarios.forEach(usuario => {
            console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
        });
    }
};