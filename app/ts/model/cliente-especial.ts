class ClienteEspecial extends Cliente {

    private dependentes: Array<Cliente>;
    
    listar() {
        return this.dependentes;
    }
}