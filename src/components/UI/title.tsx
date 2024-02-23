import React from "react";
import { BasicChild } from "@/shared/postTypes";

const Title = (props: BasicChild) => {
	return (
		<>
			{typeof props.children === 'string'?<h2 className={`text-2xl font-bold mb-2 ${props.className}`}>{props.children}</h2>:props.children}
		</>
	)
}

export default Title;