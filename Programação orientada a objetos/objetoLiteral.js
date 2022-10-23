// Criando o primeiro objeto
const user = {
    nome: "Raphael",
    email: "rapha@gmail.com",
    nascimento: "2021/01/8",
    // role: tem um papel um cargo 
    role: "admin",
    // Definindo que sempre que for criado um novo usuario no sistma por padrão esse usuario ele entra como ativo ou seja ele e um usuario ativo no sistema ele esta ativo
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email, this.role)
    }
}
// executando a função exibirInfos
user.exibirInfos()



