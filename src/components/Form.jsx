export function Form(props) {

  function handleSubmit(e){
    e.preventDefault();
    alert("Hello World")
    props.addTask("say hello")
  }

  return (
    <>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button onClick={handleSubmit} type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </>
  );
}
