const DialogZoom = ({ photo }) => {
  return (
    <>
      <dialog open={!!photo}>
        <p>Exemplo do Mozilla</p>
        <form method="dialog">
          <button type="submit">ok</button>
        </form>
      </dialog>
      ;
    </>
  );
};

export default DialogZoom;
