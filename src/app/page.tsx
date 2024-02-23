import Card from "@/components/UI/card";

const Home = () => {
  return (
    <>
		<section id="featured" className="container mx-auto p-4">
			{/* display grid */}
			<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

				<Card.Full className="flex flex-col rounded-lg shadow-lg col-span-1
				 md:col-span-2 lg:col-span-3 md:flex-row single-col"
					image={{
						src: 'http://via.placeholder.com/768x320',
						alt: 'Chrome Logo',
						width: 768,
						height: 320,
					}}
					tag={{
						children: "Featured",
					}}
					title={{
						children:"Add to Chrome"
					}}
					content={{
						children:"Minimum version 62",
					}}
					id={"card-1"}

					button={{
						href: "#",
						children: "Read More",
						className: "mt-4",
					}}
				/>
				<Card.Full className="rounded-lg shadow-lg"
					image={{
						src: 'http://via.placeholder.com/768x320',
						alt: 'Chrome Logo',
						width: 768,
						height: 320,
					}}
					tag={{
						children: "Featured",
					}}
					title={{
						children:"Add to Chrome"
					}}
					content={{
						children:"Minimum version 62",
					}}
					id={"card-2"}
					button={{
						children: "Read More",
						className: "mt-4",
						href: "#",
					}}
				/>
				<Card.Full className=" rounded-lg shadow-lg"
					image={{
						src: 'http://via.placeholder.com/768x320',
						alt: 'Chrome Logo',
						width: 768,
						height: 320,
					}}
					tag={{
						children: "Featured",
					}}
					title={{
						children:"Add to Chrome"
					}}
					content={{
						children:"Minimum version 62",
					}}
					id={"card-3"}
					button={{
						children: "Read More",
						className: "mt-4",
						href: "#",
					}}
				/>
				<Card.Full className="flex flex-col rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-1 md:flex-row lg:flex-col single-col-md"
					image={{
						src: 'http://via.placeholder.com/768x320',
						alt: 'Chrome Logo',
						width: 768,
						height: 320,
						className: 'md:rounded-bl-xl md:rounded-tr-xl lg:rounded-bl-none lg:rounded-tr-none'
					}}
					tag={{
						children: "Featured",
					}}
					title={{
						children:"Add to Chrome"
					}}
					content={{
						children:"Minimum version 62",
					}}
					id={"card-4"}
					button={{
						children: "Read More",
						className: "mt-4",
						href: "#",
					}}
				/>
			</div>
		
		</section>
		
		<section>

		</section>
    </>
  );
}

export default Home;