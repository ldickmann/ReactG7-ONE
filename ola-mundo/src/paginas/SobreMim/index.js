import PostModelo from "../../componentes/PostModelo";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "../../assets/sobre_mim_foto.png";
import fotoCapa from "../../assets/sobre_mim_capa.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Antônio!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />
    </PostModelo>
  );
}
