import java.util.List;

public class PlayerConsole {
    public void executarPlaylist(List<Musica> playlist) {

        for (Musica m : playlist ){
            exibirInterfaceGrafica(m);


        }

    }

    private void exibirInterfaceGrafica(Musica m) {

        System.out.println("----------------------------------------");
        System.out.println("|  🎵 NOW PLAYING                      |");
        System.out.printf("|  Título:  %-26s |\n", m.getTitulo()); // %-26s alinha o texto
        System.out.printf("|  Artista: %-26s |\n", m.getArtista());
        System.out.printf("|  Gênero:  %-26s |\n", m.getGenero());
        System.out.println("----------------------------------------");

    }

}
