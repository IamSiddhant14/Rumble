import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Dispatch } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {

    // const [ searchParams] = useSearchParams();
    // const attr = searchParams.get("v");

   const [ searchParam ] = useSearchParams();
   const attr = searchParam.get('v');
    const dispatch = useDispatch();
   
    useEffect(() => {

        dispatch(closeMenu());


    } , [] );


    return (

        <div className="grid h-full grid-flow-col mt-14">

            <div className=" h-full col-span-8 ">
                
                <div className="h-2/3">

                <iframe width="853" height="480" src={"https://www.youtube.com/embed/" + attr} allow="autoplay ;accelerometer " allowFullScreen></iframe>
                
                </div>

                <div className="h-1/3 mt-[40px] p-2 ">
                     <CommentsContainer/>
                </div>

            </div>

            <div className=" h-full col-span-4" >


            </div>

        </div>


    )
}

export default WatchPage ;