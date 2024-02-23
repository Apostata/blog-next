import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
	const pathName = usePathname();
	const pathArray = pathName.split("/");
	// add home to the array
	  return (
		<ul className="flex gap-1 mb-4">
			{pathArray.map((path, index) => {
				return (
						<li key={`breadcrumb-${path || index}`}>
							<Link href={`/${index ===0?'/':path}`}>{index !==0 && '/ '}{index ===0?'home':path}</Link>
						</li>
					)
				})
			}
		</ul>
  );
} 
export default Breadcrumb;