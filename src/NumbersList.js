export function NumbersList(props) {
    const numbersList = props.numbers.map(number => <li key={number}>{number}</li>);
    return (
        <ul>{numbersList}</ul>
    )
}