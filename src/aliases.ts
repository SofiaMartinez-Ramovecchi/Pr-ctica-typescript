//aliases create handy alias, expanded out by the compiler
import { RangeValidationBase } from "../union-types";

type StringOrNumber = string | number;

class UnionRangeValidationWithTypeAlias extends RangeValidationBase 
{
    IsInRange (value : StringOrNumber) : boolean
    {
        if(typeof value === "number")
        {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}

let total : string | number = 10; //douesn't consistent-lookink, change for StringOrNumber
if (new UnionRangeValidationWithTypeAlias(0,100).IsInRange(total))
{
    console.log('This value is in range');
}

