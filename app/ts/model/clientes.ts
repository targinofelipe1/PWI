class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array();
        const c1 = new Cliente('Felipe', "15", 56);
        const c2 = new Cliente('Targino', "35", 100);
        this.clientes.push(c1, c2);
    }
    inserir(cliente: Cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf: String): void {
        const removercliente = this.pesquisar(cpf);
        if (removercliente) {
            const indicecliente = this.clientes.indexOf(removercliente);
            if (indicecliente > -1) {
                this.clientes.splice(indicecliente, 1);
            }
        }
    }
    pesquisar(cpf: String): Cliente{
        return this.clientes.find(Cliente => Cliente.cpf === cpf);
    }
    listar(): Array<Cliente> {
        return this.clientes;
    }
}