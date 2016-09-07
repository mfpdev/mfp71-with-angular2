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