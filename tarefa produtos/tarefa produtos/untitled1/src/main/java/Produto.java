public class Produto {
    private String marca;
    private double preco;
    private String categoria;
    private String descricao;

    public Produto(String marca, double preco, String categoria, String descricao) {
        this.marca = marca;
        this.preco = preco;
        this.categoria = categoria;
        this.descricao = descricao;
    }

    // Adicione os Getters necessários
    public String getMarca() {
        return marca;
    }

    public double getPreco() {
        return preco;
    }

    public String getCategoria() {
        return categoria;
    }

    public String getDescricao() {
        return descricao;
    }
}