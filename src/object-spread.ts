import { Grid3 } from './intersection';
import {Margin3 } from "./intersection";

//(...) compiler treats this as a spread operation, less code, shallow copy of the properties from one or more of our input types automatically
function ConsolidateGrid(grid : Grid3, margin : Margin3) : Grid3 & Margin3
{
    let consolidateGrid = <Grid3 & Margin3>
    {
        ...margin
    };
    consolidateGrid.Width += grid.Width;
    consolidateGrid.Height += grid.Height;
    consolidateGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidateGrid;   
}

function ConsolidateGrid(grid : Grid3, margin : Margin3) : Grid3 & Margin3
{
    let consolidateGrid = <Grid3 & Margin3>
    {
        ...grid, ...margin
    };   
}
let consolidateGrid = <Grid & Margin>{...margin, ...grid};
