"use client"
import {createContext, useState, useContext} from "react";
import toast from "react-hot-toast";

export const TagContext = createContext();

export const TagProvider = ({children}) => {
    const [name, setName] = useState("");
    const [parentCategory, setParentCategory] = useState("");
    const [tags, setTags] = useState([]);
    const [updatingTag, setUpdatignTag] = useState(null);

    const createTag = async () => {
        try {
            //
        } catch (err) {
            console.log(err);
            toast.error("Error creating tag");
        }
    }

    const fetchTag = async () => {
        try {
            //
        } catch (err) {
            console.log(err);
            toast.error("Error creating tag");
        }
    }

    const updateTag = async () => {
        try {
            //
        } catch (err) {
            console.log(err);
            toast.error("Error creating tag");
        }
    }

    const deleteTag = async () => {
        try {
            //
        } catch (err) {
            console.log(err);
            toast.error("Error creating tag");
        }
    }

    return (
        <TagContext.Provider value={{
            name,
            setName,
            parentCategory,
            setParentCategory,
            tags,
            setTags,
            updatingTag,
            setUpdatignTag,
            createTag,
            fetchTag,
            updateTag,
            deleteTag
        }}>
            {children}
        </TagContext.Provider>
    )
}

export  const useTag = ()=>useContext(TagContext);