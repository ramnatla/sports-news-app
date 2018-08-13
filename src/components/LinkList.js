import React from 'react';
import Link from './Link';

const LinkList = ({linkArray}) => {
	const links = linkArray.map((article, i) => {
		return (
			<Link articleInfo={article} />
		);
	});

	return (
		<div className='pl3 pr3'>
			{links}
		</div>
	);
}

export default LinkList;