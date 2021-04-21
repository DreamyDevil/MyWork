import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as Io5Icons from "react-icons/io5";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path:'/home',
        icon: <AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title: 'Songs',
        path:'/songs',
        icon: <FaIcons.FaMusic />,
        cName:'nav-text'
    },
    {
        title: 'Playlists',
        path:'/playlists',
        icon: <AiIcons.AiFillPlayCircle/>,
        cName:'nav-text'
    },
    {
        title: 'Radio',
        path:'/radio',
        icon: <Io5Icons.IoRadio />,
        cName:'nav-text'
    },
    {
        title: 'Support',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName:'nav-text'
    },
]