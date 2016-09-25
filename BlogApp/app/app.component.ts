/**
 *    © Copyright 2016 IBM Corp.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import { Component } from '@angular/core';
import {ChangeDetectorRef} from '@angular/core'
import { Injectable, NgZone } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
})

export class AppComponent { 
  feed = [];  
    
  constructor(private changeDetector: ChangeDetectorRef, private zone: NgZone) {
    addEventListener ("mfpready",function () {
      this.getMFBlogFeed()
    }.bind(this,false), true)
  }

  getMFBlogFeed () {   
    var request = new WLResourceRequest('/adapters/MFRSSAdapter/getFeed', "GET");
    var that = this;
    request.send().then(
      function (response) {
        that.feed = response.responseJSON["rss"].channel.item;
        that.changeDetector.markForCheck();
        console.log (that.feed);
        that.zone.run(()=> function(){});
      },

      function (error) {
        //alert ("error while trying to call adapter");
      }
    );
  }

}