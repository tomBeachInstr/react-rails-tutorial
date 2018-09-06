var Body = React.createClass({

    getInitialState() {
        console.log("\n == Body: getInitialState ==");
        return { items: [] }
    },
    componentDidMount() {
        console.log("\n == Body: componentDidMount ==");
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    },
    handleSubmit(item) {
        console.log("\n == Body: handleSubmit ==");
        var newState = this.state.items.concat(item);
        this.setState({ items: newState })
    },
    handleDelete(id) {
        console.log("\n == Body: handleDelete ==");
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success:() => {
               this.removeItemClient(id);
            }
        });
    },
    removeItemClient(id) {
        console.log("\n == Body: removeItemClient ==");
        var newItems = this.state.items.filter((item) => {
            return item.id != id;
        });
        this.setState({ items: newItems });
    },
    handleUpdate(item) {
        console.log("\n == Body: handleUpdate ==");
        $.ajax({
            url: `/api/v1/items/${item.id}`,
            type: 'PUT',
            data: { item: item },
            success: () => {
                this.updateItems(item);
            }
        })
    },
    updateItems(item) {
        console.log("\n == Body: updateItems ==");
        var items = this.state.items.filter((i) => { return i.id != item.id });
        items.push(item);
        this.setState({
            items: items
        });
    },
    render() {
        console.log("\n == Body: render ==");
        return (
            <div>
                <NewItem
                    handleSubmit={this.handleSubmit}
                />
                <AllItems
                    items={this.state.items}
                    handleDelete={this.handleDelete}
                    onUpdate={this.handleUpdate}
                />
            </div>
        )
    }
});
