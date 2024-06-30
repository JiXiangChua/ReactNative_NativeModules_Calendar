//
//  RCTCalendarModule.m
//  RNNativeCalendarApp
//
//  Created by JI XIANG on 30/6/24.
//

#import <Foundation/Foundation.h>
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

// To export this module named CalendarModule
RCT_EXPORT_MODULE(CalendarModule);

// Methods written in the RCT_EXPORT_METHOD macro are asynchronous and the return type is therefore always void. In order to pass result from such method to javascript, you can use callbacks or event events.
RCT_EXPORT_METHOD(createCalendarEvent: (NSString *)name location:(NSString *)location onSuccess: (RCTResponseSenderBlock) onSuccess onFailure: (RCTResponseSenderBlock) onFailure) {
  
  @try {
    NSInteger eventId = 123123;
    NSLog(@"Something To Print: %@ at %@", name, location);
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
    onSuccess(@[@(eventId)]);
  }
  @catch (NSException *e) {
    onFailure(@[e]);
  }

}

RCT_EXPORT_METHOD(createCalendarEventPromise:(NSString *)title
                 location:(NSString *)location
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
 NSInteger eventId = 123123;
 if (eventId) {
    resolve(@(eventId));
  } else {
    reject(@"event_failure", @"no event id returned", nil);
  }
}


@end
