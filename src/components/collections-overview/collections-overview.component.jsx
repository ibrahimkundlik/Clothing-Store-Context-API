import React, { useContext } from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";

import CollectionContext from "../../contexts/collection/collection.context";

const CollectionsOverview = () => {
	const collectionData = useContext(CollectionContext);
	const collections = Object.keys(collectionData).map(
		(key) => collectionData[key]
	);

	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default CollectionsOverview;
