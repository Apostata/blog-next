'use client';

import React from "react";
import Image from "next/image";
import { useParams  } from "next/navigation";
import Title from "@/components/UI/title";
import Tag from "@/components/UI/tag";
import Breadcrumb from "@/components/UI/breadcrumb";

const Home = () => {

  return (
	<article id="featured" className="container mx-auto p-4">
		<Breadcrumb/>
		<main>
			<Tag>Featured</Tag>
			<Title className="mb-5 ">Featured Posts</Title>
			<figure className=" relative mb-9">
				<Image src='http://via.placeholder.com/1280x387'
					alt= 'Chrome Logo'
					className="max-h-[387px] min-w-full object-cover rounded-lg shadow-lg"
					width={1280}
					height={387}
				/>
			</figure>
			<div>
				<p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, eligendi? Maiores, sed, rem libero ut corrupti voluptate ad mollitia animi aspernatur numquam tempora ab eveniet quasi deserunt assumenda vero ratione, magni dolorem eius consequatur vel fugit? Adipisci quas rem hic dolores molestiae, numquam officiis molestias fugit nisi similique, odio repellat earum in! Aliquam, cupiditate? Voluptatem ab maxime assumenda accusamus labore, error quia vel odio fuga saepe sunt, perspiciatis quaerat non blanditiis, illum nisi fugiat eligendi natus ex quidem. Aliquam voluptatem consectetur delectus cumque optio facere, vitae soluta dicta, doloremque beatae aspernatur eveniet, voluptates veniam. Explicabo fuga saepe quae vel maiores?</p>
				<p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis tenetur itaque, inventore consequatur tempora nam soluta animi magnam enim mollitia quas, vitae sit rerum alias accusamus, ducimus laudantium quae ab.</p>
				<p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit reiciendis architecto impedit minus accusantium quos quisquam magni aut nesciunt eos.</p>
			</div>
		</main>
	</article>
  );
}

export default Home;