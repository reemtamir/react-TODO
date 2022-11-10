function PopUp({ handleDeleteTrue, handleDeleteFalse }) {
  return (
    <>
      <div
        style={{ position: 'absolute', left: '50rem', top: '20rem' }}
        className="w-25 bg-dark  m-auto text-center border border-primary"
      >
        <div className="modal_box">
          <p className="fs-3 text-light">You sure you wanna delete?</p>
          <button
            onClick={handleDeleteFalse}
            className="modal_buttonCancel btn btn-success me-2"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteTrue}
            className="modal_buttoDelete btn btn-danger "
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default PopUp;
