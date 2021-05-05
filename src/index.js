import ReactDOM from "react-dom";

const price = "1000$";
ReactDOM.render(
    <>
        <Programm/>
        <table border="1">
            <tr>
                <td>КУРС</td>
                <td>Длительность</td>
                <td>Стоисмость</td>
            </tr>
            <tr>
                <td><Html/></td>
                <td>15 уроков</td>
                <td>{price}</td>
            </tr>
            <tr>
                <td><Html/>дополнение</td>
                <td>6 уроков</td>
                <td><Price/></td>
            </tr>
            <tr>
                <td>Основы JavaScripta</td>
                <td><Lessons/></td>
                <td><Price/></td>
            </tr>
            <tr>
                <td>Angular</td>
                <td><Lessons/></td>
                <td><Price/></td>
            </tr>
            <tr>
                <td>React</td>
                <td><Lessons/></td>
                <td><Price/></td>
            </tr>
            <Tr/>
            <Tr/>
            <Tr/>
        </table>
    </>,
    document.getElementById("root"));

function Programm() {
    return <h1>Программа обучения</h1>
}

function Html() {
    return <div>HTML/CSS</div>
}

function Price() {
    return <div>5000$</div>
}

function Lessons() {
    return <div>10 уроков</div>
}
function Tr() {
    return <tr>
            <td>888</td>
            <td>8765</td>
            <td>242424</td>
           </tr>
}