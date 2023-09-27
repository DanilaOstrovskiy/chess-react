import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
    cell: Cell
}


const CellComponent: FC<CellProps>= ({cell}) => {
    return (
        <div className ={['cell', cell.color].join(' ')}>
            {cell.figure !== null ? (
                /* Render the figure if it's not null */
                <>{cell.figure}</>
            ) : (
                /* Render some fallback content if cell.figure is null */
                <div>No Figure</div>
            )}
        </div>
    );
};

export default CellComponent;