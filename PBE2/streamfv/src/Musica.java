public class Musica {

    protected String artista;
    protected String titulo;
    protected String genero;
    protected int duracaoEmsegundos;

    public Musica(String artista, String titulo, String genero, int duracaoEmsegundos) {
        this.artista = artista;
        this.titulo = titulo;
        this.genero = genero;
        this.duracaoEmsegundos = duracaoEmsegundos;
    }

    public String getArtista() {
        return artista;
    }

    public void setArtista(String artista) {
        this.artista = artista;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public int getDuracaoEmsegundos() {
        return duracaoEmsegundos;
    }

    public void setDuracaoEmsegundos(int duracaoEmsegundos) {
        this.duracaoEmsegundos = duracaoEmsegundos;
    }

    @Override
    public String toString() {
        return "Musica{" +
                "/artista='" + artista + '\'' +
                ", titulo='" + titulo + '\'' +
                ", genero='" + genero + '\'' +
                ", duracaoEmsegundos=" + duracaoEmsegundos +
                '}';
    }
}