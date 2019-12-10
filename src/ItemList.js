<p className="items">Items</p>
<ol className="item-list">
  {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
</ol>