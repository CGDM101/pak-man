class Square extends React.Component {
    render() {
        return (
            <button className="square"> {/*todo*/}</button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        
    }
}