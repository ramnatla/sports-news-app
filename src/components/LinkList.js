import React from 'react';
import Link from './Link';

const LinkList = ({linkArray}) => {
	if (linkArray.length === 0){
		return (
			<h1 className='tc'>No popular stories out yet!</h1>
		);
	}
	const links = linkArray.map((article, i) => {
		return (
			<Link key={i} articleInfo={article} />
		);
	});

	return (
		<div className='pl3 pr3'>
			{links}
		</div>
	);
}

export default LinkList;