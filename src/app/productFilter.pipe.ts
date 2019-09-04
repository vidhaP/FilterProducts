import {PipeTransform, Pipe} from '@angular/core';
import { pipe } from 'rxjs';

@Pipe
({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform
{
    transform(items: any[], searchText: string):any []
    {
        if(!items)
        {
            return[];
        }
        if(!searchText)
        {
            return items;
        }
        searchText=searchText.toLowerCase();
        console.log(searchText);
        return items.filter(a=>{
            console.log(a.productName);
            return a.productName.toLowerCase().includes(searchText);
        })
    }
}