import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDetails } from "../services/swapi";

import { Loader } from "../components/Loader";

export const Details = () => {

	const { type, uid } = useParams();

	const [details, setDetails] = useState(null);

	useEffect(() => {

		const endpoint =
			type === "characters"
				? "people"
				: type;

		getDetails(endpoint, uid)
			.then(setDetails);

	}, [type, uid]);

	if (!details) return <Loader />;

	return (
		<div className="container py-5">

			<h1 className="main-title mb-5">
				{details.name}
			</h1>

			<div className="details-card">

				{Object.entries(details).map(([key, value]) => (

					<p key={key}>
						<strong>{key}:</strong> {value}
					</p>

				))}

			</div>

		</div>
	);
};