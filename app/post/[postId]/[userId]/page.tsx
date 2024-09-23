"use client"

import Comments from "@/app/components/post/Comments"
import CommentsHeader from "@/app/components/post/CommentsHeader"
import Link from "next/link"
import { useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useRouter } from "next/navigation"
// import ClientOnly from "@/app/components/ClientOnly"
import { PostPageTypes } from "@/app/types"


import ClientOnly from "@/app/components/clientOnly"

export default function Post({ params }: PostPageTypes) {

   

    const router = useRouter()

    
 const postById={
    id:'1234',
    user_id :'7890',
     video_url:'/kaalu.mp4',
    text:'this is some text',
    created_at:'date here',
   profile:{
     user_id:'4567',name:'user-1',
     image:'https://placehold.co/100'
   }
 }
    const loopThroughPostsUp = () => {
       
        console.log("loopThroughPostsUp")
    }

    const loopThroughPostsDown = () => {
      console.log("loopThroughPostsDown")
    }

    return (
        <>
            <div 
                id="PostPage" 
                className="lg:flex justify-between w-full h-screen bg-black overflow-auto"
            >
                <div className="lg:w-[calc(100%-540px)] h-full relative">
                    <Link
                        href={`/profile/${params?.userId}`}
                        className="absolute text-white z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
                    >
                        <AiOutlineClose size="27"/>
                    </Link>

                    <div >
                        <button 
                            onClick={() => loopThroughPostsUp()}
                            className="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
                        >
                            <BiChevronUp size="30" color="#FFFFFF"/>
                        </button>

                        <button  
                            onClick={() => loopThroughPostsDown()}
                            className="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
                        >
                            <BiChevronDown size="30" color="#FFFFFF"/>
                        </button>
                    </div>

                    <img 
                        className="absolute z-20 top-[18px] left-[70px] rounded-full lg:mx-0 mx-auto" 
                        width="45" 
                        src="/image/iii.png"
                    />

                    <ClientOnly>
                        {postById?.video_url ?(
                            <video 
                                className="fixed object-cover w-full my-auto z-[0] h-screen" 
                                src="/kaalu.mp4"
                            />
                        ) : null}

                        <div className="bg-black bg-opacity-70 lg:min-w-[480px] z-10 relative">
                        {postById?.video_url ? (
                                <video 
                                    autoPlay
                                    controls
                                    loop
                                    muted
                                    className="h-screen mx-auto" 
                                    src="/kaalu.mp4"
                                />
                            ) : null}
                        </div>
                    </ClientOnly>

                </div>

                <div id="InfoSection" className="lg:max-w-[550px] relative w-full h-full bg-white">
                <div className="py-7" />

<ClientOnly>
    {postById ?.video_url ?(
       <CommentsHeader post={postById} params={params}/>
           ) : null}
         </ClientOnly>
          <Comments params={params}/>

             </div>
            </div>
        </>
    )
}