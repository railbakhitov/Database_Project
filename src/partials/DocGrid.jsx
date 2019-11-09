import React from 'react';
import cn from 'classnames';

export const DocGrid = ({children, className, cols, style}) => {

    if (cols === undefined) {
        return "Укажите количество колонок!";
    }

    return (
        <table className={className} style={style}>
            <tbody>
               {children}
            </tbody>
        </table>
    );

}

export const Row = ({children, className, rowspan, index}) => {

    const classNames = cn('Row', className);

    return (
        <tr className={classNames} rowSpan={rowspan}>{children}</tr>
    );

}

export const Col = ({children, className, rowspan, colspan, index, style}) => {

    const classNames = cn('Col', className);

    return (
        <td className={classNames} style={style} rowSpan={rowspan} colSpan={colspan}>{children}</td>
    );

}