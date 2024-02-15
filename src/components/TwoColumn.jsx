import React from 'react';

export default function TwoColumn({ leftColumn, rightColumn }) {
    const renderColumn = (columnElements) => React.Children.map(columnElements, (child, index) => (
        <div key={index}>
            {child}
        </div>
    ));

    return (
        <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
                {renderColumn(leftColumn)}
            </div>
            <div className="w-full md:w-1/2 px-4">
                {renderColumn(rightColumn)}
            </div>
        </div>
    );
}
