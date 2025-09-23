type HomeMessages = typeof import("./messages/en/home.json");
type Messages = HomeMessages
 
declare interface IntlMessages extends Messages {}