import React from 'react';
import { BasicChild } from '@/shared/postTypes';

const Tag = (props: BasicChild) => {
	return (
		<>
			{typeof props.children === 'string'?<span className={`text-xs mb-2 block ${props.className||''}`}>{props.children}</span>:props.children}
		</>
	)
}
export default Tag;