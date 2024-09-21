import Image from "next/image";
"use client"
import MainLayout from "./layouts/MainLayout";
import ClientOnly from "./components/clientOnly"
import PostMain from "./components/PostMain";
export default function Home() {
  return (
   <>
    <MainLayout>
        <div className="mt-[80px]  w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClientOnly> 
        
          <PostMain post={{
          id:'1234',
           user_id :'7890', video_url:'/beach.mp4',text:'this is some text',created_at:'date here',
          profile:{
            user_id:'4567',name:'user-1',image:'https://placehold.co/100'
          }
         }}/>
           </ClientOnly>
        </div>
      </MainLayout>
   </>
  );
}
