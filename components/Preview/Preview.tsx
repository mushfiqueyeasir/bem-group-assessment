"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Preview = ({ body }) => {
    const [zoomLevel, setZoomLevel] = useState(1);

    const zoomIn = () => {
        setZoomLevel(zoomLevel + 0.1);
    };

    const zoomOut = () => {
        if (zoomLevel > 0.2) {
            setZoomLevel(zoomLevel - 0.1);
        }
    };

    const handleZoom = (e) => {
        // Invert zoom factor for scrolling up and down
        const zoomFactor = e.deltaY > 0 ? -0.1 : 0.1;
        const newZoomLevel = Math.max(0.1, Math.min(zoomLevel + zoomFactor, 3)); // Limit zoom level between 0.1 and 3
        setZoomLevel(newZoomLevel);
    };

    return (
        <div className="relative overflow-x-auto overflow-y-auto py-6" onWheel={handleZoom}>
            <div style={{ transform: `scale(${zoomLevel})` }}>
                <PreviewComponent htmlString={body.code} />
            </div>
            <div className="absolute right-4 top-4 flex flex-col gap-y-4">
                <button onClick={zoomIn} className="rounded-full bg-gray-400 p-3">
                    <FaPlus />
                </button>
                <button onClick={zoomOut} className="rounded-full bg-gray-400 p-3">
                    <FaMinus />
                </button>
            </div>
        </div>
    );
};

export default Preview;

const PreviewComponent = ({ htmlString }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
