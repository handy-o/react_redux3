// function Card(props) {
//     console.log(props)
//     const path = process.env.PUBLIC_URL; //public까지의 경로

//     return (
//         <article>
//             <h1>{props.item}</h1>
//             <img src={`${path}/img/${props.item}.jpg`} alt={props.item} />
//         </article>
//     )
// }


function Card({ item, index, num }) {
    const path = process.env.PUBLIC_URL; //public까지의 경로
    const style = {
        transform: `rotate(${360 / num * index}deg) translateY(-170%)`,
    }

    return (
        <article style={style}>
            <div className="inner">
                <div className="pic">
                    <img src={`${path}/img/${item}.jpg`} alt={item} />
                </div>
                <h2>{item}</h2>

            </div>
        </article>
    )
}


export default Card;