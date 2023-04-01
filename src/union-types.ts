/*
we'll start off with a simple clas that allows us to specify the minimum and maximum values thar form our range and function to actually perform the validation
*/

export class RangeValidationBase
{
    //It's more elegant this than declaring start and end before the constructor and then use this.and into the constructor
    constructor(private start : number, private end : number)
        {
        
        }
        protected RangeCheck(value : number) : boolean
        {
            return value >= this.start && value <= this.end;
        }
        
        protected GetNumber(value : string) : number   
        {
            return new Number(value).valueOf();
        }
}

class SeparateTypeRangeValidation extends RangeValidationBase 
{
    IsInRangeString(value : string) : boolean 
    {
        return this.RangeCheck(this.GetNumber(value));
    }
    IsInRangeNumber(value : number) : boolean 
    {
        return this.RangeCheck(value);
    }
}
//this second technique that we could use is to allow us to pass in the value without constraining it
class AnyRangeValidation extends RangeValidationBase 
{
    IsInRange(value : any) : boolean
    {
        if(typeof value === "number")
        {
            return this.RangeCheck(value);
        }else if(typeof value === "string")
        {
            return this.RangeCheck(this.GetNumber(value));
        }
        return false;
    }
}
//Unfortunately, we can still pass an invalid type into the method, If we passed boolean in, for instance, this code compile successfully but it would fail at runtime.
class UnionRangeValidation extends RangeValidationBase
{
    IsInRange(value : string | number ) : boolean 
    {
        if (typeof value === "number")
        {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}
// -strinctNullChecks option or strictNullChecks = true is a flag in our tsconfig.json file
