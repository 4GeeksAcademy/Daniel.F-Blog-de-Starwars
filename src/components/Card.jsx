import { Link } from "react-router-dom";

export const Card = ({ item, type }) => {

    const uid = item.uid;

    return (
        <div
            className="card-sw p-3 m-2"
            style={{ minWidth: "250px" }}
        >
            <img
                src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`}
                className="img-fluid rounded"
                onError={(e)=>{
                    e.target.src =
                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
                }}
            />

            <h4 className="mt-3">
                {item.name}
            </h4>

            <Link
                to={`/details/${type}/${uid}`}
                className="btn btn-warning mt-2"
            >
                Learn more
            </Link>
        </div>
    );
};