import React from 'react';
import Link from './Link';

const LinkList = ({linkArray}) => {
	const links = linkArray.map((article, i) => {
		return (
			<Link articleInfo={article} />
		);
	});

	return (
		<div>
			{links}
		</div>
	);
}

export default LinkList;