import { Component } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-json-tools',
  templateUrl: './json-tools.component.html',
  styleUrls: ['./json-tools.component.css']
})
export class JsonToolsComponent {
  editor: Editor;
  html = '';
  data:Object = [
    {
      "name": "d1",
      "days": [
        "monday",
        "wednesday",
      ],
      "options": {
        "name": "o1",
        "extras": [],
        "temp": [
          "12",
          "25",
          "12"
        ]
      }
    },
    {
      "name": "d2",
      "days": [
        "tuesday",
        "wednesday",
      ],
      "options": {
        "name": "o2a",
        "extras": [
          {
            name: 'extra 1'
          }
        ],
        "temp": [
          "22",
          "25",
          "12"
        ]
      }
    }
  ]

  // getType(val: any) {
  //   if (Array.isArray(val)) {// aray's will be type of "object" so need specail cases, and possibly others but this is a good start
  //     return 'array';
  //   } else if (typeof val === 'string' || val instanceof String) {
  //     return 'string';
  //   } else if (typeof val === 'boolean') {
  //     return 'boolean';
  //   } else if (typeof val === "object") {
  //     return 'object'
  //   }
  //   return {};
  // }

}
