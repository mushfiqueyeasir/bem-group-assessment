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
        const zoomFactor = e.deltaY > 0 ? -0.1 : 0.1;
        const newZoomLevel = Math.max(0.1, Math.min(zoomLevel + zoomFactor, 3));
        setZoomLevel(newZoomLevel);
    };

    return (
        <div className="relative py-6">
            {body && (
                <>
                    <div className="mx-auto w-fit overflow-x-auto overflow-y-auto  border">
                        <div
                            className="overflow-x-auto overflow-y-auto"
                            onWheel={handleZoom}
                            style={{ transform: `scale(${zoomLevel})` }}
                        >
                            <PreviewComponent htmlString={body.code} />
                        </div>
                    </div>
                </>
            )}
            <div className="container fixed top-0  flex  h-[90vh] flex-col items-end justify-center gap-y-4 ">
                <button onClick={zoomIn} className="rounded-full bg-gray-400 p-3 mr-4">
                    <FaPlus />
                </button>
                <button onClick={zoomOut} className="rounded-full bg-gray-400 p-3 mr-4">
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
