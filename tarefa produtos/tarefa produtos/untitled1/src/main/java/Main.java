import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao = 0;

        try (Connection conn = Conexao.conectar()) {
            while (opcao != 5) {
                System.out.println("\n--- MENU PRODUTOS ---");
                System.out.println("1-Cadastrar | 2-Listar | 3-Atualizar | 4-Deletar | 5-Sair");
                System.out.print("Escolha: ");
                opcao = scanner.nextInt();

                switch (opcao) {
                    case 1:
                        List<Produto> produtos = new ArrayList<>();
                        produtos.add(new Produto("apple", 12000.0, "Celular", "iphone17promax"));
                        cadastrarProdutos(conn, produtos);
                        break;
                    case 2:
                        exibirProdutos(conn);
                        break;
                    case 3:
                        System.out.print("ID para atualizar: ");
                        int idUp = scanner.nextInt();
                        System.out.print("Novo preço: ");
                        double novoPreco = scanner.nextDouble();
                        atualizarProduto(conn, idUp, novoPreco);
                        break;
                    case 4:
                        System.out.print("ID para deletar: ");
                        int idDel = scanner.nextInt();
                        removerProduto(conn, idDel);
                        break;
                    case 5:
                        System.out.println("Saindo...");
                        break;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        scanner.close();
    }

    public static void cadastrarProdutos(Connection conn, List<Produto> produtos) {
        try {
            String sql = "INSERT INTO produto (marca, preco, categoria, descricao) VALUES (?, ?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            for (Produto p : produtos) {
                stmt.setString(1, p.getMarca());
                stmt.setDouble(2, p.getPreco());
                stmt.setString(3, p.getCategoria());
                stmt.setString(4, p.getDescricao());
                stmt.execute();
                System.out.println("Adicionado: " + p.getMarca());
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void exibirProdutos(Connection conn) {
        String sql = "SELECT * FROM produto";
        try (PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") + " | Marca: " + rs.getString("marca") + " | Preço: " + rs.getDouble("preco"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void atualizarProduto(Connection conn, int id, double novoPreco) {
        String sql = "UPDATE produto SET preco = ? WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setDouble(1, novoPreco);
            stmt.setInt(2, id);
            stmt.executeUpdate();
            System.out.println("Atualizado!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void removerProduto(Connection conn, int id) {
        String sql = "DELETE FROM produto WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
            System.out.println("Removido!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
