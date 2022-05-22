function Btns({ count, setCount }) {
    return (
        <>
            <a href="#" className="prev" onClick={() => setCount(count - 1)} />
            <a href="#" className="next" onClick={() => setCount(count + 1)} />
        </>
    )
}

export default Btns