import java.util.ArrayList;
import java.util.List;

public class DJService {
    public List<Musica> criarPlaylistPorVibe(String vibe) {
        //implementar toda lógica de filtro
        List<Musica> playlistCompleta = BancoDeMusicas.carregarDados();
        List<Musica> playlistFiltrada = new ArrayList<>();

        for (Musica m : playlistCompleta) {
            if (vibe.equalsIgnoreCase("Festa")) {
                if (m.getGenero().equalsIgnoreCase("Rock") ||
                        m.getGenero().equalsIgnoreCase("Rap") ||
                        m.getGenero().equalsIgnoreCase("Pop")) {
                    playlistFiltrada.add(m);
                }
            } else if (vibe.equalsIgnoreCase("Estudo")) {
                if (m.getGenero().equalsIgnoreCase("Lo-fi") ||
                        m.getGenero().equalsIgnoreCase("Relax")) {
                    playlistFiltrada.add(m);
                }
            } else {
                playlistFiltrada.add(m);
            }
        }
        return playlistFiltrada;
    }
}

