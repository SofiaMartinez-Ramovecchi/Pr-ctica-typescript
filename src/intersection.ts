
export class Grid
{
    Width : number = 0;
    Height : number = 0;
}

export class Margin 
{
    Left : number = 0;
    Top : number = 0;
}

function ConsolidatedGrid(grid : Grid, margin : Margin) : Grid & Margin
{
    let consolidatedGrid = < Grid & Margin >{};
    consolidatedGrid.Width = grid.Width;
    consolidatedGrid.Height = grid.Height;
    consolidatedGrid.Left = margin.Left;
    consolidatedGrid.Top = margin.Top;
    return consolidatedGrid;
}
//It doesn't matter if you have the same properties for two class, for example
class Margin1
{
    Left : number = 0;
    Top : number = 0;
    Width : number = 10;
    Height : number = 20;
}

function ConsolidateGrid1(grid : Grid, margin : Margin1) : Grid & Margin1
{
    let consolidatedGrid1 = <Grid & Margin>{};
    consolidatedGrid1.Width = grid.Width + margin.Width;
    consolidatedGrid1.Height = grid.Height + margin.Height;
    consolidatedGrid1.Left = margin.Left;
    consolidatedGrid1.Top = margin.Top;
    return consolidatedGrid1;
}

class Grid2
{
    Width : number = 0;
    Height : number = 0;
    Weight : number = 0;
}
class Margin2
{
  Left : number = 0;
  Top : number = 0;
  Width : number = 10;
  Height : number = 20;
  Weight : string = "1";
}
//try and add the Weight types together in our ConsolidatedGrid function
function ConsolidateGrid2(grid : Grid2, margin : Margin2) : Grid2 & Margin2
{
    let consolidatedGrid2 = <Grid2 & Margin2>{};
    consolidatedGrid2.Width = grid.Width + margin.Width;
    consolidatedGrid2.Left = margin.Left;
    //consolidatedGrid2.Weight = grid.Weight + new Number (margin.Weight).valueOf();
    consolidatedGrid2.Top = margin.Top;
    consolidatedGrid2.Height = grid.Height + margin.Height;
    return consolidatedGrid2;
}
export class Grid3 
{
    Width : number = 0;
    Height : number = 0;
    Padding : number = 0;
}
export class Margin3
{
    Left : number = 0;
    Top : number = 0; 
    Width : number = 10;
    Height : number = 20;
    Padding?: number;
}

function ConsolidateGrid3(grid : Grid3, margin : Margin3) : Grid3 & Margin3
{
    let consolidatedGrid3 = <Grid3 & Margin3>{};
    consolidatedGrid3.Width = grid.Width + margin.Width;
    consolidatedGrid3.Left = margin.Left;
    //consolidatedGrid2.Weight = grid.Weight + new Number (margin.Weight).valueOf();
    consolidatedGrid3.Top = margin.Top;
    //asignar dos valores a una variable
    consolidatedGrid3.Height = grid.Height + margin.Height;
    //shorthand of if.
    //var = algo ? algo : otra cosa
    //var = if(algo){algo}else{otra cosa}
    consolidatedGrid3.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidatedGrid3;
}
