import Image from "next/image";
import React from "react";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
	<div className="border border-r-0 border-l-0 border-b-0 border-gray-900 p-4 hover:bg-slate-200 transition-all cursor-pointer ">
	  <div className="grid grid-cols-12 gap-3">
		<div className="col-span-1">
		  <Image
			src="https://avatars.githubusercontent.com/u/109384165?v=4"
			width={50}
			height={50}
			alt="profile"
		  />
		</div>
		<div className="col-span-11">
		  <h5>Vinay Sharma</h5>
		  <p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa culpa
			quam maiores et cum corporis impedit digniss
		  </p>
		  <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
			<div>
			  <BiMessageRounded />
			</div>
			<div>
			  <FaRetweet />
			</div>
			<div>
			  <AiOutlineHeart />
			</div>
			<div>
			  <BiUpload />
			</div>
		  </div>
		</div>
	  </div>
	</div>
  );
};

export default FeedCard;