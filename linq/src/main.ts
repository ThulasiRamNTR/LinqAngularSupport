import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { List } from './linq/List';

//#region Start region:
//Array Extensions implementations
Array.prototype.ToList = function(): List<any> 
        {  
            var list: List<any> = new List<any>();
            var currArr: Array<any> = this;
            currArr.forEach(item => 
                {
                    list.Add(item);
                }
            );
            return list; 
        } 

Array.prototype.Where = function (values:any): Array<any> 
{
    var filterArray: Array<any> = new Array<any>();
    let filteredsArray: Array<any> = [];
    if(this.filter((input: any) => input === values))
    {
        filteredsArray.push(values);
    }
    filteredsArray.forEach(item => 
        {
            filterArray.push(item);
        }
    );
    return filterArray;
}

Array.prototype.FirstOrEmpty = function (): Array<any> |null
{
    if (this.FirstOrEmpty == null) { return null; }
    return this.at(0);
}
//#endregion

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
