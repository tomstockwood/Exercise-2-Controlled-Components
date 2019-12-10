<form onSubmit={this.addItem}>
  <input
    type="text"
    placeholder="Enter New Item"
    value={this.state.value}
    onChange={this.handleChange}
  />
  <button disabled={this.inputIsEmpty()}>Add</button>
</form>

