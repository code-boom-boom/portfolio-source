import { SearchZoomIn } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import { UIContext } from "../App";
import ProjectDetail from "./ProjectDetail";

export default function Project({ project }) {

    const { uiDispatch } = useContext(UIContext);

    return (
        <div className="relative rounded-lg cursor-pointer" onClick={() => uiDispatch({ type: "OPEN_PROJECT_MODAL", payload: project })}>
            <img className="w-full rounded-lg" src={project.image} alt={project.name} />
            <div className="absolute rounded-lg inset-0 flex justify-center items-center bg-primary/75 opacity-0 hover:opacity-100 z-10 duration-500">
                <SearchZoomIn size={36} color="#FFFFFF" />
            </div>
        </div>
    );
}