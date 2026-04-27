import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {
    public static Connection conectar(){
        try{
            String url = "jdbc:mysql://localhost:3306/meu_primeiro_banco";
            String user = "root";
            String password = "123456";

            return DriverManager.getConnection(url,user,password);
        } catch (SQLException e) {
            throw new RuntimeException("Erro na conexão" + e.getMessage());
        }
    }

}
