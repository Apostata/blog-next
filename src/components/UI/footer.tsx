const Footer = () => {
	  return (
	<footer className="container mx-auto mt-8 px-4">
		<hr className="border-black border-opacity-10"/>
	  	<div className=" pt-5 mb-5">
			<p >© Headless Blog {new Date().getFullYear()}</p>
		</div>
	</footer>
  );
}
export default Footer;