import Link from "next/link";
import Image from "next/image";
import React from "react";
import Tag from "./tag";
import Title from "./title";
import { BasicChild } from "@/shared/postTypes";
import * as HiIcons from "react-icons/hi";


type CardImageProps = {
	src: string;
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
}

type CardButtonProps = BasicChild & {
	action?: (args:any[]) => void;
	href?: string;

}


type CardProps = {
	className: string;
	id: string;
	image: CardImageProps
	title: BasicChild;
	content: BasicChild;
	tag?: BasicChild;
	button?: CardButtonProps
}
const Card  = (props: CardProps) => {
	return (
		
		<div className={`${props.className} group`}>
			<div className=" overflow-hidden w-full">
				<CardImage src={props.image.src} alt={props.image.alt} width={props.image.width} height={props.image.height} className={`${props.image?.className} object-cover aspect-video w-full max-h-80`}/>
			</div>
			<div className="w-full flex flex-col py-6 px-3 items-start">
				{props?.tag && <Tag {...props.tag} />}
				<Title  {...props.title}/>
				<CardContent {...props.content} />
				{props?.button && <CardButton {...props.button} />}
			</div>
		</div>
  );
}

const Root = (props:BasicChild) => {
	return (<div className={`${props.className} group`}>
		{props.children}
	</div>)
}

const CardImage = (props:CardImageProps) => {
	return (
		
		<figure  className={`w-full rounded-tl-lg rounded-tr-lg overflow-hidden 
		group-[&.single-col]:md:!rounded-tr-none group-[&.single-col]:md:!rounded-bl-lg
		group-[&.single-col-md]:md:!rounded-tr-none group-[&.single-col-md]:md:!rounded-bl-lg group-[&.single-col-md]:lg:!rounded-bl-none group-[&.single-col-md]:lg:!rounded-tr-lg
		 ${props.className}`}>
			{!props?.height || !props?.width ? 
			<Image src={props.src} alt={props?.alt ?? ''} className='object-cover aspect-video w-full max-h-80 min-h-80' fill/>
			:
			<Image src={props.src} alt={props?.alt ?? ''} width={props.width} height={props.height} className='object-cover aspect-video w-full max-h-80'/>
			}
		</figure>
	)
}


const CardContent = (props: BasicChild) => {
	return (
		<>
			{typeof props.children === 'string'?<p className={`mb-3 ${props.className}`}>{props.children}</p>:props.children}
		</>
	)
}


const CardButton = (props: CardButtonProps) => {
	const Icon = HiIcons['HiArrowSmRight']
	const className = `bg-blue-700 text-white rounded-full duration-300 mt-4 py-1 px-3 items-center inline-flex gap-2 font-lato
	hover:bg-blue-400 ${props.className}`
	if(props.href){
		return (
				<Link href={props.href} className={className}>
					{props.children} <Icon className="text-2xl leading-1"/>
				</Link>
		)
	}
	return (
		<>
			{
			typeof props.children === 'string'?
				<button className={className}>
					{props.children} <Icon className="text-2xl leading-1"/>
				</button>
				:props.children
			}
		</>
	)

}

export default {Full:Card, Root, Image:CardImage, Title, Content:CardContent, Tag, Button:CardButton};