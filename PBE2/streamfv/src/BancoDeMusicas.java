import java.util.ArrayList;
import java.util.List;

public class BancoDeMusicas {
    public static List<Musica> carregarDados(){
        List<Musica> Playlist = new ArrayList<>();
        Playlist.add(new Musica("Blinding Lights", "The Weeknd", "Pop", 200));
        Playlist.add(new Musica("Numb", "Linkin Park", "Rock", 185));
        Playlist.add(new Musica("Butter", "BTS", "Pop", 190));
        Playlist.add(new Musica("Study Beats Vol. 1", "Lofi Girl", "Lo-Fi", 300));
        Playlist.add(new Musica("Bohemian Rhapsody", "Queen", "Rock", 355));
        Playlist.add(new Musica("Shape of You", "Ed Sheeran", "Pop", 240));
        Playlist.add(new Musica("Rain Sounds", "Nature", "Relax", 500));
        Playlist.add(new Musica("Industry Baby", "Lil Nas X", "Rap", 210));
        Playlist.add(new Musica("Smells Like Teen Spirit", "Nirvana", "Rock", 280));



        return Playlist;
    }
}