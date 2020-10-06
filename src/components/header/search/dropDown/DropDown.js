import React, {useContext, useEffect, useState} from "react";
import "./DropDown.scss"
import {PostsContext} from "../../../../context/postsContext/PostsContext";
import {SuggestedPost} from "./suggestedPost/SuggestedPost";

export const DropDown = ({search, setSearch}) => {

    const posts = useContext(PostsContext)

    const [suggestedPosts, setSuggestedPosts] = useState()

    useEffect(() => {
    if(posts.data.isFetched){
        let elems= [];
        posts.data.posts.forEach((elem, index) => {
            if((elem.title.search(search.text) === 0 /*|| elem.fullText.search(search.text)  === 0*/) && elems.length < 3){
                elems.push(elem);
            }
        })
        setSuggestedPosts(elems)
    }
    }, [setSearch, search, posts])

    useEffect(() => {
        window.addEventListener("click", (event) => {
            const isClickInside =
                document.getElementsByClassName('drop-down-search-menu')[0].contains(event.target)
                || document.getElementsByClassName('makeStyles-search-4')[0].contains(event.target);

            if (!isClickInside) {
                setSearch({...search, open: false});
            }else if(isClickInside){
                setSearch({...search, open: true});
            }
        })
    }, [setSearch, search])

    return (
        <div className="drop-down-search-menu">
            {suggestedPosts && (search.text !== "" &&  search.open)&& suggestedPosts.map((elem, index) => {
                return(<SuggestedPost data={elem} key={index}/>)
            })}
        </div>
    )
}