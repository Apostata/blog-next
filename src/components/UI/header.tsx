'use client';
import { useRouter } from "next/navigation";
const Header = () => {
const router = useRouter();
	  return (
	<header className="container mx-auto py-13 px-4 cursor-pointer">
	  <h1 onClick={()=>{
		router.push("/");
	  }}>Headless Blog</h1>
	</header>
  )
}

export default Header;
