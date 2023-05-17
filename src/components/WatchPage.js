import { useSearchParams } from "react-router-dom";
import { useEffect} from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import RecommendationVideo from "./RecommendationVideo";

const WatchPage = () => {

    const [searchParam] = useSearchParams();
    const attr = searchParam.get('v');
    const dispatch = useDispatch();
   

    useEffect(() => {

        dispatch(closeMenu());


    }, []);


    return (

        <div className="flex w-full my-14 ">

{/* <div className={" bg-slate-400 h-60 w-60 font-bold "+ (isDarkTheme && "bg-gray-900" ) }>
   
   </div> */}

            <div className=" h-full m-1 rounded-2xl w-2/3  flex flex-col ">

                <div className="h-[500px] w-full rounded-2xl border border-black  my-1 overflow-hidden ">

                    <iframe className="relative  h-full overflow-hidden w-full " src={"https://www.youtube.com/embed/" + attr} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>

                <div className=" overflow-scroll sidd rounded-2xl w-full border border-black ">
                    <CommentsContainer />
                </div>



            </div>

            
            <div className=" h-full m-1 rounded-2xl w-1/3 flex flex-col " >

                <div className="h-[500px] w-full my-1 rounded-2xl border border-black">
                    <LiveChat />
                </div>

                <div className=" w-full flex justify-center rounded-2xl border border-black">

                    <RecommendationVideo/>

                </div>


            </div>

        </div>

    )
}

export default WatchPage;