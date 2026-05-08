import { Card } from "./Card";

export const CardList = ({ title, items, type }) => {

    return (
        <div className="mb-5">

            <h2 className="title-glow mb-3">
                {title}
            </h2>

            <div
                className="d-flex overflow-auto"
            >
                {items.map((item) => (
                    <Card
                        key={item.uid}
                        item={item}
                        type={type}
                    />
                ))}
            </div>
        </div>
    );
};