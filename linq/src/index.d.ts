///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Purpose: index.d.ts
//
// Reason for this file: 
//      If we need some separate extension of already existing types, we need to extend it in a .d.ts file 
//      for typescript, and then we can implement the extended interface in a ts file
//      Ref link: https://bobbyhadz.com/blog/typescript-array-extend
//  
//      Array extension:
//          Inspiration: https://www.c-sharpcorner.com/article/learn-about-extension-methods-in-typescript/
//          An extension to do extend our existing native angular types, and avoid too much code, and 
//          a neater cleaner method usgae instead of static classes
//          Actual implementation done in the root main.ts file
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { List } from "src/linq/List";

export{}
declare global
{
    interface Array<T>
    {
        /**
         * Helps to prepare a list from the array
         */
        ToList(): List<T>;
        /**
         * Helps to prepare a filter from the array
         */
        Where( input:any): Array<T>;
        /**
         * Helps to prepare a firstrow or EmptyRow from the array
         */
        FirstOrEmpty():any;
    }
}
