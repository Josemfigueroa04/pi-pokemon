import style from "./Loading.module.css";
import imagen from "../../imagenes/snorlax-roll.gif"

const Loading = () => {
    return (
        <div className={style.container}>
            <img src={imagen} alt="gif" /> <h1>Loading ...</h1>
        </div>
    )
}

export default Loading;