import { Card } from "./Card";

export const CardList = ({ title, items, type }) => {
	return (
		<section className="mb-5">

			<h2 className="section-title">
				{title}
			</h2>

			<div className="cards-container">

				{items.map((item) => (
					<Card
						key={item.uid}
						item={item}
						type={type}
					/>
				))}

			</div>

		</section>
	);
};