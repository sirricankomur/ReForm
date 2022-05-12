import { Pipe, PipeTransform } from '@angular/core';
import { Form } from '@datas/models/base/form';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Form[], filterText: string): Form[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((f:Form)=>f.name.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
