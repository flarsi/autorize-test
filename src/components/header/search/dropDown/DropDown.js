import React, {useContext, useEffect, useRef, useState} from "react";
import "./DropDown.scss"
import {PostsContext} from "../../../../context/postsContext/PostsContext";
import {SuggestedPost} from "./suggestedPost/SuggestedPost";
import {useOutsideClick} from "../../../../helpers/middlewares";

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
    }, [search, posts])

    const dropDownRef = useRef(null)

    useOutsideClick(dropDownRef,
        () => {
            setSearch({...search, open: false});
        },
        () => {
            setSearch({...search, open: true});
        }
        )

    return (
        <div className="drop-down-search-menu" ref={dropDownRef}>
            {suggestedPosts && (search.text !== "" &&  search.open)&& suggestedPosts.map((elem, index) => {
                return(<SuggestedPost data={elem} key={index}/>)
            })}
        </div>
    )
}