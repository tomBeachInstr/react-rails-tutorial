var AllItems = React.createClass({
    handleDelete(id) {
        console.log("\n == AllItems: handleDelete ==");
        this.props.handleDelete(id);
    },

    onUpdate(item) {
        console.log("\n == AllItems: onUpdate ==");
        this.props.onUpdate(item);
    },

    render() {
        console.log("\n == AllItems: render ==");
            var items= this.props.items.map((item) => {
                return (
                    <div key={item.id}>
                        <Item item={item}
                            handleDelete={this.handleDelete.bind(this, item.id)}
                            handleUpdate={this.onUpdate}
                        />
                    </div>
                )
            });

        return(
            <div>
                {items}
            </div>
        )
    }
});
