import React from 'react';

const Link = ({articleInfo}) => {
	let {description, source, title, url} = articleInfo;
	
	return (
		<div className='pb2'>
			<a href={url} target='_blank' className='black'>
			<div className='f4 tl link dim black'>
				{`${title}`}
			</div>
			</a>

			<div className='f5 tl pl4'>
				{`-${description}`}
			</div>
			<div className='f6 tl pl4'>
				{`Source: ${source}`}
			</div>
		</div>
	);
}

export default Link;