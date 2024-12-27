import styles from "./Post.module.css";

export default function Post({ post }) {
  const imagePath = `/assets/posts/${post.id}/capa.png`;
  console.log("Image Path:", imagePath);

  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={imagePath}
        alt="Imagem de capa do post"
      />

      <h2 className={styles.titulo}>{post.titulo}</h2>

      <button className={styles.botaoLer}>Leia mais</button>
    </div>
  );
}
