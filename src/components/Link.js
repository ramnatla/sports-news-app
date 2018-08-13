import React from 'react';

const Link = ({articleInfo}) => {
	console.log(articleInfo);
	let {description, img, source, title, url} = articleInfo;
	
	return (
		<div className='pb4'>
			<a href={url} target='_blank' className='black'>
			<div className='f3 tl link dim black'>
				{`${title}`}
			</div>
			</a>

			<div className='f4 tl pl4'>
				{`-${description}`}
			</div>
			<div className='f5 tl pl4'>
				{`Source: ${source}`}
			</div>
		</div>
	);
}

export default Link;