///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Purpose: List Util provides a c# like List or Array, using which we can do any linq operation as well.
//  Currently in angular, linq is not supported.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class List<T> implements Iterable<T>
{
    //#region Private Members
    private list: Array<T>;
    //#endregion

    //#region Public properties
    public get Items(): T[]
    {
        return this.list;
    }
    //#endregion

    //#region Iterable Interface
    /**
     * Iterable interface
     * @returns Iterable Object
     */
    [Symbol.iterator](): Iterator<any> 
    {
        return this.list.values();
    }
    //#endregion

    //#region Constructor
    constructor()
    {
        this.list = new Array<T>();
    }
    //#endregion

    //#region Public Methods
    /**
     * Helps to add the given item into the internal array cache
     * @param item Item
     * @returns List
     */
    public Add(item: T) : List<T>
    {
        if (this.list.includes(item)){ return this; }
        this.list.push(item);
        return this;
    }
    /**
     * Helps to check whether the internal array cache contains the array or not
     * @param item Item
     * @returns Contains or not
     */
    public Contains(item: T): boolean
    {
        return this.list.includes(item);
    }
    /**
     * Helps to remove the item from the internal array cache
     * @param item Item
     * @returns List
     */
    public Remove(item: T) : List<T>
    {
        if(!this.list.includes(item)){ return this; }
        this.list = this.list.filter(obj => obj != item);
        return this;
    }
    /**
     * Clears the entire cache
     */
    public Clear(): void
    {
        this.list.splice(0);
    }
    /**
     * Helps to get the value at the given index in the internal array cache
     * @param index Index
     * @returns value at the specified index
     */
    public GetValue(index: number): T 
    {
        if (index >= this.list.length ) {return null as any;}
        return this.list.at(index) as T;
    }
    /**
     * Helps to get the index of the provided value in the internal array cache
     * @param value Value
     * @returns Index
     */
    public GetIndexOf(value: T): number 
    {
        if(!this.list.includes(value)){return -1;}
        return this.list.indexOf(value);
    }
    /**
     * Returns true if the list array is empty
     */
    public IsEmpty(): boolean
    {
        return this.list.length==0;
    }
    /**
     * Returns true if the list array is non-empty
     */
    public IsNonEmpty(): boolean
    {
        return this.list.length!=0;
    }
    /**
     * Helps to get the first element in the array if it is non-empty
     * Else returns null
     * @returns First or emmpty element
     */
    public FirstOrEmpty(): any 
    {
        if(this.IsEmpty()){return null;}
        return this.list.at(0);
    }
    /**
     * Helps to filter the list based on the given lambda expression
     * @param query Query/Lambda expression
     * @returns Filtered list
     */
    public Where(query: any): List<T>
    {
        var filteredList: List<T> = new List<T>();
        var filteredArray: Array<T> = this.list.filter(query);
        filteredArray.forEach(item => 
            {
                filteredList.Add(item);
            }
        );
        return filteredList;
    }
     /**
     * Helps to give list count
     * @returns count
     */
     public Count(): number
     {
         return this.list.length;
     }
    /**
     * Helps to sort the list
     * @returns sortedlist
     */
    public Sort(isSortDescending?:boolean,value?:string): List<T>
    {
        var sortedList: List<T> = new List<T>();
        var sortedArray: Array<T> = []
        sortedArray = this.GetSortedArray(isSortDescending);
        sortedArray.forEach(item => 
            {
                sortedList.Add(item);
            }
        );
        return sortedList;
    }
    //#endregion

    //#region Private Methods
    /**
     * Helps to get the sorted array based on condition
     * By default the sorting is ascending
     * @param issortDescending 
     * @param value 
     * @returns SortedArray
     */
    private GetSortedArray(issortDescending?:boolean):Array<T>
    {
        if (issortDescending == true)
        {
            return this.list.sort((a, b) => (a > b) ? -1 : 1);
        }
        else
        {
             return this.list.sort((a, b) => (a < b) ? -1 : 1);
        }   
    }
    //#endregion
}